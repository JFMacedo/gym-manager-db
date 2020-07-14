module.exports = {
  age(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);
    const month = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
  
    if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1;
    }
  
    return age;
  },
  date(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      br: `${day}/${month}`,
      birthBr: `${day}/${month}/${year}`
    };
  }
}