/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
export default function getUpdatedOffsetForIndex ({
  cellOffset,
  cellSize,
  containerSize,
  currentOffset
}) {
  const maxOffset = cellOffset
  const minOffset = maxOffset - containerSize + cellSize
  const newOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset))

  return newOffset
}
