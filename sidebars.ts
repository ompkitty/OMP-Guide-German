import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Deutschsprachige Oh-My-Pi-Dokumentation.
 * Die Kategorien spiegeln die Themen der Dokumentation wider und
 * bleiben bewusst schlank, damit sie sich leicht erweitern lassen.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Einführung',
      collapsed: false,
      items: ['einstieg/was-ist-oh-my-pi'],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        'installation/voraussetzungen',
        'installation/anleitung',
        'installation/windows-powershell',
      ],
    },
    {
      type: 'category',
      label: 'Konfiguration',
      collapsed: false,
      items: ['konfiguration/grundlagen'],
    },
    {
      type: 'category',
      label: 'Verwendung',
      collapsed: false,
      items: ['verwendung/grundlagen'],
    },
    {
      type: 'category',
      label: 'Funktionen',
      collapsed: false,
      items: ['funktionen/uebersicht'],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsed: false,
      items: ['settings/modelroles', 'settings/designs'],
    },
    {
      type: 'category',
      label: 'Erweiterung',
      collapsed: false,
      items: ['erweiterung/kostenlose-nutzung'],
    },
  ],
};

export default sidebars;