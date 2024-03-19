// Trong file chứa các hàm
export function formatCurrency(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return ''; // Trả về chuỗi rỗng nếu number không hợp lệ
    }
    // Sử dụng hàm toLocaleString để định dạng số theo định dạng tiền tệ của quốc gia
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function calculateDiscountPercentage(discountPrice, originalPrice) {
    if (originalPrice === 0) {
        return 0; // Tránh chia cho 0
    }
    return ((originalPrice - discountPrice) / originalPrice) * 100;
}
