import React, { useEffect, useState } from 'react';

const storageKey = 'formulaSheetsUploadedImages';

export default function ImageUploadPreview(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        if (Array.isArray(parsed)) {
          setImages(parsed);
        }
      } catch {
        // ignore invalid storage content
      }
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }

    const readers = files.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(typeof reader.result === 'string' ? reader.result : '');
          };
          reader.readAsDataURL(file);
        }),
    );

    Promise.all(readers).then((results) => {
      const nextImages = results.filter(Boolean);
      const mergedImages = images.length === 0 ? nextImages : [...images, ...nextImages];
      const lockedImages = images.length === 0 ? [nextImages[0]].filter(Boolean) : images;
      const finalImages = images.length === 0 ? lockedImages : [...lockedImages, ...nextImages];
      setImages(finalImages);
      window.localStorage.setItem(storageKey, JSON.stringify(finalImages));
    });
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleFileChange} />
      {images.length > 0 && (
        <div style={{ marginTop: '0.75rem' }}>
          {images.map((image, index) => (
            <img
              key={`${image.slice(0, 20)}-${index}`}
              src={image}
              alt={`Uploaded preview ${index + 1}`}
              onClick={() => {
                setSelectedImage(image);
                setIsOpen(true);
              }}
              style={{ cursor: 'zoom-in', maxWidth: '100%', marginTop: index > 0 ? '0.75rem' : 0 }}
            />
          ))}
        </div>
      )}

      <div
        className={`imageModalOverlay${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={() => setIsOpen(false)}
      >
        <div className="imageModalContent" onClick={(event) => event.stopPropagation()}>
          {selectedImage && <img src={selectedImage} alt="Full-size preview" />}
        </div>
      </div>
    </div>
  );
}
