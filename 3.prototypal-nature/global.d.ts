export {};

declare global {
  interface Array<T> {
    getLength(): number;
  }
  interface String{
    isPalindrome:()=>boolean
  }
  interface Object{
    hi:string
  }
}
