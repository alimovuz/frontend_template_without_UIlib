  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    
    if (!cleaned) return ''
    
    let formatted = '+998'
    if (cleaned.length > 3) {
      formatted += ' ' + cleaned.substring(3, 5)
    }
    if (cleaned.length > 5) {
      formatted += ' ' + cleaned.substring(5, 8)
    }
    if (cleaned.length > 8) {
      formatted += ' ' + cleaned.substring(8, 10)
    }
    if (cleaned.length > 10) {
      formatted += ' ' + cleaned.substring(10, 12)
    }
    
    return formatted
  }

  // Telefon raqamni tozalash funksiyasi (faqat raqamlar)
  const cleanPhoneNumber = (value: string) => {
    return value.replace(/\D/g, '')
  }

export {formatPhoneNumber, cleanPhoneNumber}