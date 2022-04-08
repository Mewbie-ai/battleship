const Ship = (length, parts, sunkCheck) => {
  const hit = (i) => {
    // marks a parts[] array node as 'hit'
    parts[i] = 'hit'
  }
  const isSunk = (parts) => {
    parts.every((value, _, array) => array[0] === value)
  }
  return { parts, isSunk }
}

module.exports = Ship