export function AddActivity (ob) {
   const {name} = {
       name: (ob.target.value.match(/\*[^]*\*/)[0]).replaceAll("*", "")
   }
   
}