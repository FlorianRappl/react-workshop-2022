export default function(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Just a dummy - fail half of the time
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
