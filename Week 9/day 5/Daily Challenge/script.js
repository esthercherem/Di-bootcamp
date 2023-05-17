function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  
    const date1 = new Date(2020, 6, 4, 8, 0, 0);
  console.log(formatDate(date1)); // Output: "20200704080000"
  
  const date2 = new Date(2019, 11, 31, 23, 59, 59);
  console.log(formatDate(date2)); // Output: "20191231235959"
  
  const date3 = new Date(2020, 6, 4);
  console.log(formatDate(date3)); // Output: "20200704000000"
  
  }