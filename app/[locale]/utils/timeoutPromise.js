export default function setTimeoutPromise(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
// await setTimeoutPromise(1000);
