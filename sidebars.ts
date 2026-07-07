import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Chemistry Units',
      link: {
        type: 'doc',
        id: 'chemistry-units/intro',
      },
      items: [
        { type: 'doc', id: 'chemistry-units/chapter-1-chemical-foundations/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-2-atoms-molecules-and-ions/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-3-stoichiometry/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-4-types-of-chemical-reactions/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-5-gases/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-6-thermochemistry/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-7-atomic-structure-and-periodicity/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-8-bonding-general-concepts/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-9-covalent-bonding-orbitals/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-10-liquids-and-solids/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-11-properties-of-solutions/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-12-chemical-kinetics/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-13-chemical-equilibrium/intro' },
        { type: 'doc', id: 'chemistry-units/chapter-14-acids-and-bases/intro' },
      ],
    },
    {
      type: 'category',
      label: 'Practice Problems',
      link: {
        type: 'doc',
        id: 'practice-problems/intro',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Formula Sheets',
      link: {
        type: 'doc',
        id: 'formula-sheets/intro',
      },
      items: [],
    },
  ],
};

export default sidebars;
