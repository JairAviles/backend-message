const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] Invalid input data')
      reject('Invalida input data!');
      return false
    } else {
      const fullMessage = {
        user,
        message,
        date: new Date()
      };
      console.log(fullMessage)
      resolve(fullMessage)
    }
  })
}

module.exports = { 
  addMessage
}
