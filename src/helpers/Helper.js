export function formatPrice(price) {
  // Sử dụng Intl.NumberFormat để định dạng giá
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  return formatter.format(price)
}

export function formatSold(amount) {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1) + 'M'
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(amount % 1000 !== 0 ? 1 : 0) + 'k'
  } else {
    return amount.toString()
  }
}
