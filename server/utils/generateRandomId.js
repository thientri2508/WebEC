const generateRandomId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
  
    // Sinh ngẫu nhiên 4 chữ cái in hoa
    let randomLetters = '';
    for (let i = 0; i < 4; i++) {
      randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  
    // Sinh ngẫu nhiên 4 chữ số
    let randomDigits = '';
    for (let i = 0; i < 4; i++) {
      randomDigits += digits.charAt(Math.floor(Math.random() * digits.length));
    }
  
    // Kết hợp 4 chữ cái và 4 chữ số thành một mảng
    const combinedArray = (randomLetters + randomDigits).split('');
  
    // Sắp xếp ngẫu nhiên thứ tự của các phần tử trong mảng
    for (let i = combinedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
    }
  
    // Chuyển mảng đã xáo trộn thành chuỗi và trả về
    return combinedArray.join('');
  };
  
  module.exports = generateRandomId;
  