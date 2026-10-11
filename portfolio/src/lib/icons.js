import {
  Boxes,
  CalendarCheck,
  ClipboardList,
  Database,
  LayoutTemplate,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Sofa,
  Wrench,
} from "lucide-react";

/**
 * Maps the icon names used in portfolioData.js to Lucide components.
 * Importing them by name keeps the bundle small (tree-shaking).
 * To use a new icon: import it here and add it to the map.
 */
const iconMap = {
  Boxes,
  CalendarCheck,
  ClipboardList,
  Database,
  LayoutTemplate,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Sofa,
  Wrench,
};

export function getIcon(name) {
  return iconMap[name] ?? Boxes;
}
