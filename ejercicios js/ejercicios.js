const array = [1, 2, 2, 3, 4, 5, 6, "h", "s", "c", "h", 3, 6];

const a = [6, 8, 9, 3, 4, 5];

const result = array.filter((e, i) => array.indexOf(e) === i);

function imprimir() {
   console.log(result);


   let temp = [],
      temp2 = [];
   a.forEach((e, i) => {
      if (i < a.length - 1) {
         e + 1 === a[i + 1]
            ? temp.push(e)
            : temp.length > temp2.length
               ? ((temp2 = temp), (temp = []))
               : null;
      } else {
         e - 1 === a[i - 1]
            ? temp.push(e)
            : temp.length > temp2.length
               ? (temp2 = temp)
               : null;
      }
   });

   if (temp2.length > temp.length) console.log(temp2);
   else console.log(temp);
}

