import React, { useEffect, useState } from 'react';

const storageKey = 'formulaSheetsUploadedImage';

export default function ImageUploadPreview(): JSX.Element {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      setDataUrl(saved);
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      if (result) {
        setDataUrl(result);
        window.localStorage.setItem(storageKey, result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="imageUploadBox">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="hiddenImageUpload"
          style={{ display: 'none' }}
        />
        {dataUrl ? (
          <div style={{ marginTop: '0.75rem' }}>
            <img
              src={dataUrl}
              alt="Uploaded preview"
              onClick={() => setIsOpen(true)}
              style={{ cursor: 'zoom-in', width: '100%' }}
            />
          </div>
        ) : (
          <div
            onClick={() => document.getElementById('hiddenImageUpload')?.click()}
            style={{ cursor: 'pointer', minHeight: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', borderRadius: '6px', color: '#666' }}
          >
            Click to upload an image
          </div>
        )}
      </div>

      <div
        className={`imageModalOverlay${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={() => setIsOpen(false)}
      >
        <div className="imageModalContent" onClick={(event) => event.stopPropagation()}>
          {dataUrl && <img src={dataUrl} alt="Full-size preview" />}
        </div>
      </div>
    </div>
  );
}
