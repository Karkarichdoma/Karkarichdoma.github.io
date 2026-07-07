import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f5f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '10a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '629'),
            routes: [
              {
                path: '/docs/chemistry-units/intro',
                component: ComponentCreator('/docs/chemistry-units/intro', '8b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/formula-sheets/intro',
                component: ComponentCreator('/docs/formula-sheets/intro', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/practice-problems/intro',
                component: ComponentCreator('/docs/practice-problems/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
