const children = [...figma.currentPage.children];

if (children.length === 0) {
  figma.closePlugin("No nodes on this page.");
} else {
  let minX = Infinity;
  let minY = Infinity;

  for (const node of children) {
    minX = Math.min(minX, node.x);
    minY = Math.min(minY, node.y);
  }

  for (const node of children) {
    node.x -= minX;
    node.y -= minY;
  }

  figma.viewport.scrollAndZoomIntoView(children);
  figma.closePlugin();
}
