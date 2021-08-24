// Group all nodes on current page
const group: GroupNode = figma.group(
  figma.currentPage.children,
  figma.currentPage
);

// Set axis to 0, 0
group.x = 0;
group.y = 0;

// Ungroup all nodes
group.children.forEach((i) => {
  let parent = group.parent;
  let index = parent.children.indexOf(group);
  parent.insertChild(index, i);
});

// Adjust viewport to zoom to fit
figma.viewport.scrollAndZoomIntoView([group]);

// Close plugin
figma.closePlugin();
