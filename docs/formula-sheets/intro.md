---
id-title: Formula Sheets
sidebar_position: 1
---

# Formula Sheets

Use this area for quick-reference sheets and study summaries.

## Jump to a sheet

- [Periodic Table](#periodic-table)
- [Naming compounds](#naming-compounds)
- [General chemistry formulas](#general-chemistry-formulas)
- [Unit conversion charts](#unit-conversion-charts)
- [Equations for gas laws](#equations-for-gas-laws)
- [Thermodynamics reference](#thermodynamics-reference)

---

## Periodic Table

A quick link to the periodic table, with element symbols, atomic numbers, and groups.

<div class="figureCenter">
	<a href="#" id="openPeriodic">
		<img src="/img/periodic-table.png" alt="Periodic Table" class="responsiveImage" style="width:600px; max-width:100%;" />
	</a>
	<div class="figureCaption">Periodic Table — откроется в увеличении при загрузке страницы.</div>
</div>

<!-- Modal for full-size periodic table -->
<div id="periodicModal" class="modalOverlay hidden" role="dialog" aria-modal="true" aria-label="Periodic Table">
	<button class="modalClose" id="closePeriodic" aria-label="Close">&times;</button>
	<div class="modalContent">
		<img src="/img/periodic-table.png" alt="Periodic Table full" />
	</div>
</div>

<script>
	(function(){
		function openModal(){ document.getElementById('periodicModal').classList.remove('hidden'); }
		function closeModal(){ document.getElementById('periodicModal').classList.add('hidden'); }
		document.addEventListener('DOMContentLoaded', function(){
			var modal = document.getElementById('periodicModal');
			if(modal) {
				// open modal automatically
				openModal();
				// click handlers
				var openLink = document.getElementById('openPeriodic');
				if(openLink){ openLink.addEventListener('click', function(e){ e.preventDefault(); openModal(); }); }
				var closeBtn = document.getElementById('closePeriodic');
				if(closeBtn){ closeBtn.addEventListener('click', closeModal); }
				modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });
			}
		});
	})();
</script>

## Naming Compounds

Guides for IUPAC naming, common names, and rules for naming ionic and covalent compounds.

## General chemistry formulas

Add the most important formulas here, such as molarity, percent composition, and gas law equations.

## Unit conversion charts

Add unit conversion reference tables for moles, mass, volume, and energy.

## Equations for gas laws

Add gas law equations like Boyle's law, Charles's law, Avogadro's law, and the ideal gas law.

## Thermodynamics reference

Add thermodynamics formulas like enthalpy, entropy, and Gibbs free energy.
