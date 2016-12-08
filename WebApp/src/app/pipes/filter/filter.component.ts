import {Pipe, PipeTransform} from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterArrayPipe  {
  transform(value, args) {
    if (!args[0]) {
      return value;
    } else if (value) {
      return value.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) && 
              (item[key].indexOf(args) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}

@Pipe({ name: 'filtere' })
export class FilterArrayPipeExactly  {
  transform(value, args) {
    if (!args[0]) {
      return value;
    } else if (value) {
      return value.filter(item => {
        for (let key in item) {
          if (typeof item[key] === 'string' || item[key] instanceof String){
            if (item[key].toLowerCase().includes(args.toLowerCase()))
              return true
          }
        }
      });
    }
  }
}