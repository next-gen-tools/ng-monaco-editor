export const js_snippets = [

    {
       "label": "ca",
       "kind": "snippet",
       "insertText": "console.assert(${1:condition}, ${2:message})",
       "documentation": "Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens."
     },
     {
       "label": "ccl",
       "kind": "snippet",
       "insertText": "console.clear()",
       "documentation": "Clears the console."
     },
     {
       "label": "cc",
       "kind": "snippet",
       "insertText": "console.count(${1:label})",
       "documentation": "Logs the number of times that this particular call to count() has been called. This function takes an optional argument label."
     },
     {
       "label": "ccr",
       "kind": "snippet",
       "insertText": "console.countReset(${1:label})",
       "documentation": "Resets the counter. This function takes an optional argument label."
     },
     {
       "label": "cdb",
       "kind": "snippet",
       "insertText": "console.debug(${1:message})",
       "documentation": "The Console method debug() outputs a message to the web console at the \"debug\" log level. The message is only displayed to the user if the console is configured to display debug output."
     },
     {
       "label": "cd",
       "kind": "snippet",
       "insertText": "console.dir(${1:value})",
       "documentation": "The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects."
     },
     {
       "label": "cdx",
       "kind": "snippet",
       "insertText": "console.dirxml(${1:object})",
       "documentation": "Displays an interactive tree of the descendant elements of the specified XML/HTML element. If it is not possible to display as an element the JavaScript Object view is shown instead. The output is presented as a hierarchical listing of expandable nodes that let you see the contents of child nodes."
     },
     {
       "label": "ce",
       "kind": "snippet",
       "insertText": "console.error(${1:message})",
       "documentation": "Outputs an error message to the Web Console."
     },
      {
       "label": "cg",
       "kind": "snippet",
       "insertText": "console.group(${1:groupTitle})",
       "documentation": "Creates a new inline group in the Web Console log. This indents following console messages by an additional level, until console.groupEnd() is called."
     },
      {
       "label": "cgc",
       "kind": "snippet",
       "insertText": "console.groupCollapsed(${1:groupTitle})",
       "documentation": "Creates a new inline group in the Web Console. Unlike console.group(), however, the new group is created collapsed. The user will need to use the disclosure button next to it to expand it, revealing the entries created in the group."
     },
     {
       "label": "cge",
       "kind": "snippet",
       "insertText": "console.groupEnd()",
       "documentation": "Exits the current inline group in the Web Console. See Using groups in the console in the console documentation for details and examples."
     },
     {
       "label": "ci",
       "kind": "snippet",
       "insertText": "console.info(${1:message})",
       "documentation": "Outputs an informational message to the Web Console. In Firefox and Chrome, a small \"i\" icon is displayed next to these items in the Web Console's log."
     },
     {
       "label": "cl",
       "kind": "snippet",
       "insertText": "console.log(${1:message})",
       "documentation": "The Console method log() outputs a message to the web console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects."
     },
     {
       "label": "ctb",
       "kind": "snippet",
       "insertText": "console.table(${1:tabularData})",
       "documentation": "Displays tabular data as a table."
     },
     {
       "label": "ct",
       "kind": "snippet",
       "insertText": "console.time(${1:label})",
       "documentation": "Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started."
     },
     {
       "label": "cte",
       "kind": "snippet",
       "insertText": "console.timeEnd(${1:label})",
       "documentation": "Stops a timer that was previously started by calling \"console.time()\"."
     },
      {
       "label": "ctr",
       "kind": "snippet",
       "insertText": "console.trace(${1:message})",
       "documentation": "The console interface's trace() method outputs a stack trace to the Web Console."
     },
      {
       "label": "cw",
       "kind": "snippet",
       "insertText": "console.warn(${1:message})",
       "documentation": "Outputs a warning message to the Web Console."
     },
      {
       "label": ".concat",
       "kind": "snippet",
       "insertText": ".concat(${1:items})",
       "documentation": "The \"arrayInstance.concat()\" method s used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.\n\nThe \"stringInstance.concat()\" method concatenates the string arguments to the calling string and returns a new string."
     },
      {
       "label": ".includes",
       "kind": "snippet",
       "insertText": ".includes(${3:searchElement}${1:, ${2:fromIndex}})",
       "documentation": "The \"arrayInstance.includes()\" method determines whether an array includes a certain value among its entries, returning true or false as appropriate.\n\nThe \"stringInstance.includes()\" method determines whether one string may be found within another string, returning true or false as appropriate."
     },
      {
       "label": ".indexOf",
       "kind": "snippet",
       "insertText": ".indexOf(${3:searchElement}${1:, ${2:fromIndex}})",
       "documentation": "The \"arrayInstance.indexOf()\" method returns the first index at which a given element can be found in the array, or -1 if it is not present.\n\nThe \"stringInstance.indexOf()\" method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found."
     },
      {
       "label": ".lastIndexOf",
       "kind": "snippet",
       "insertText": ".lastIndexOf(${3:searchElement}${1:, ${2:fromIndex}})",
       "documentation": "The \"arrayInstance.lastIndexOf()\" method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.\n\nThe \"stringInstance.lastIndexOf()\" method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found."
     },
      {
       "label": ".slice",
       "kind": "snippet",
       "insertText": ".slice(${1:${2:start}${3:, ${0:end}}})",
       "documentation": "The \"arrayInstance.slice()\" method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.\n\nThe \"stringInstance.slice()\" method extracts a section of a string and returns it as a new string, without modifying the original string."
     },
      {
       "label": ".toString",
       "kind": "snippet",
       "insertText": ".toString(${1:radix})",
       "documentation": "The \"numberInstance.toString()\" method returns a string representing the specified Number object.\nThe \"functionInstance.toString()\" method returns a string representing the source code of the function.\nThe \"dateInstance.toString()\" method returns a string representing the specified Date object.\nThe \"regExpInstance.toString()\" method returns a string representing the regular expression."
     },
     {
       "label": ".valueOf",
       "kind": "snippet",
       "insertText": ".valueOf()",
       "documentation": "The \"arrayInstance.valueOf()\" method returns the primitive value of the specified object.\n\nThe \"stringInstance.valueOf()\" method returns the primitive value of a String object.\n\nThe \"numberInstance.valueOf()\" method returns the wrapped primitive value of a Number object.\nThe \"dateInstance.valueOf()\" method returns the primitive value of a Date object."
     },
     {
       "label": "Af",
       "kind": "snippet",
       "insertText": "Array.from(${1:arrayLike}${2:, ${0:mapFn}})",
       "documentation": "The \"Array.from()\" method creates a new, shallow-copied Array instance from an array-like or iterable object."
     },
      {
       "label": "Aia",
       "kind": "snippet",
       "insertText": "Array.isArray(${1:value})",
       "documentation": "The \"Array.isArray()\" method determines whether the passed value is an Array."
     },
      {
       "label": "Ao",
       "kind": "snippet",
       "insertText": "Array.of(${1:items})",
       "documentation": "The \"Array.of()\" method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments."
     },
      {
       "label": ".copyWithin",
       "kind": "snippet",
       "insertText": ".copyWithin(${1:target}${2:, ${3:start}${4:, ${0:end}}})",
       "documentation": "The \"copyWithin()\" method shallow copies part of an array to another location in the same array and returns it without modifying its length."
     },
      {
       "label": ".entries",
       "kind": "snippet",
       "insertText": ".entries()",
       "documentation": "The \"entries()\" method returns a new Array Iterator object that contains the key/value pairs for each index in the array."
     },
      {
       "label": ".every",
       "kind": "snippet",
       "insertText": ".every(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"every()\" method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."
     },
      {
       "label": ".fill",
       "kind": "snippet",
       "insertText": ".fill(${1:target}${2:, ${3:start}${4:, ${0:end}}})",
       "documentation": "The \"fill()\" method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array."
     },
      {
       "label": ".filter",
       "kind": "snippet",
       "insertText": ".filter(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"filter()\" method creates a new array with all elements that pass the test implemented by the provided function."
     },
      {
       "label": ".find",
       "kind": "snippet",
       "insertText": ".find(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"find()\" method returns the value of the first element in the array that satisfies the provided testing function. Otherwise \"undefined\" is returned."
     },
      {
       "label": ".findIndex",
       "kind": "snippet",
       "insertText": ".findIndex(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"findIndex()\" method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test."
     },
      {
       "label": ".flat",
       "kind": "snippet",
       "insertText": ".flat(${1:depth})",
       "documentation": "The \"flat()\" method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth."
     },
      {
       "label": ".flatMap",
       "kind": "snippet",
       "insertText": ".flatMap(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"flatMap()\" method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient."
     },
      {
       "label": ".forEach",
       "kind": "snippet",
       "insertText": ".forEach(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"forEach()\" method executes a provided function once for each array element."
     },
      {
       "label": ".join",
       "kind": "snippet",
       "insertText": ".join(${1:separator})",
       "documentation": "The \"join()\" method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator."
     },
      {
       "label": ".keys",
       "kind": "snippet",
       "insertText": ".keys()",
       "documentation": "The \"keys()\" method returns a new Array Iterator object that contains the keys for each index in the array."
     },
      {
       "label": ".map",
       "kind": "snippet",
       "insertText": ".map(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"map()\" method creates a new array with the results of calling a provided function on every element in the calling array."
     },
      {
       "label": ".pop",
       "kind": "snippet",
       "insertText": ".pop()",
       "documentation": "The \"pop()\" method removes the last element from an array and returns that element. This method changes the length of the array."
     },
      {
       "label": ".push",
       "kind": "snippet",
       "insertText": ".push(${1:value})",
       "documentation": "The \"push()\" method removes the last element from an array and returns that element. This method changes the length of the array."
     },
      {
       "label": ".reduce",
       "kind": "snippet",
       "insertText": ".reduce(${3:(${4:previousValue}${5:, ${6:currentValue}${7:, ${8:currentIndex}${9:, ${10:array}}}}) => {$0\\}}${1:, ${2:initialValue}})",
       "documentation": "The \"reduce()\" method executes a reducer function (that you provide) on each element of the array, resulting in a single output value."
     },
      {
       "label": ".reduceRight",
       "kind": "snippet",
       "insertText": ".reduceRight(${3:(${4:previousValue}${5:, ${6:currentValue}${7:, ${8:currentIndex}${9:, ${10:array}}}}) => {$0\\}}${1:, ${2:initialValue}})",
       "documentation": "The \"reduceRight()\" method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value."
     },
      {
       "label": ".reverse",
       "kind": "snippet",
       "insertText": ".reverse()",
       "documentation": "The \"reverse()\" method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."
     },
     {
       "label": ".shift",
       "kind": "snippet",
       "insertText": ".shift()",
       "documentation": "The \"shift()\" method removes the first element from an array and returns that removed element. This method changes the length of the array."
     },
     {
       "label": ".some",
       "kind": "snippet",
       "insertText": ".some(${1:(${2:value}${3:, ${4:index}${5:, ${6:array}}}) => {$0\\}})",
       "documentation": "The \"some()\" method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value."
     },
     {
       "label": ".sort",
       "kind": "snippet",
       "insertText": ".sort(${1:(${2:a}, ${3:b}) => {$0\\}})",
       "documentation": "The \"sort()\" method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."
     },
     {
       "label": ".unshift",
       "kind": "snippet",
       "insertText": ".unshift(${0:value})",
       "documentation": "The \"unshift()\" method adds one or more elements to the beginning of an array and returns the new length of the array."
     },
     {
       "label": ".values",
       "kind": "snippet",
       "insertText": ".values()",
       "documentation": "The \"values()\" method returns a new Array Iterator object that contains the values for each index in the array."
     },
     {
       "label": "Oa",
       "kind": "snippet",
       "insertText": "Object.assign(${1:target}${2:, ${0:sources}})",
       "documentation": "The \"Object.assign()\" method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object."
     },
     {
       "label": "Oc",
       "kind": "snippet",
       "insertText": "Object.create(${1:proto}${2:, {$0\\}})",
       "documentation": "The \"Object.create()\" method creates a new object, using an existing object as the prototype of the newly created object."
     },
     {
       "label": "Odps",
       "kind": "snippet",
       "insertText": "Object.defineProperties(${1:obj}, {$0})",
       "documentation": "The \"Object.defineProperties()\" method creates a new object, using an existing object as the prototype of the newly created object."
     },
     {
       "label": "Odp",
       "kind": "snippet",
       "insertText": "Object.defineProperty(${1:obj}, ${2:propertyKey}, {$0})",
       "documentation": "The static method \"Object.defineProperty()\" defines a new property directly on an object, or modifies an existing property on an object, and returns the object."
     },
     {
       "label": "Oe",
       "kind": "snippet",
       "insertText": "Object.entries(${0:obj})",
       "documentation": "The \"Object.entries()\" method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well). The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array should be sorted first like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));."
     },
     {
       "label": "Of",
       "kind": "snippet",
       "insertText": "Object.freeze(${0:obj})",
       "documentation": "The \"Object.freeze()\" method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in."
     },
     {
       "label": "Ofe",
       "kind": "snippet",
       "insertText": "Object.fromEntries(${0:entries})",
       "documentation": "The \"Object.fromEntries()\" method transforms a list of key-value pairs into an object."
     },
     {
       "label": "Ogopd",
       "kind": "snippet",
       "insertText": "Object.getOwnPropertyDescriptor(${1:obj}, ${0:propertyKey})",
       "documentation": "The \"Object.getOwnPropertyDescriptor()\" method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object."
     },
     {
       "label": "Ogopds",
       "kind": "snippet",
       "insertText": "Object.getOwnPropertyDescriptor(${0:obj})",
       "documentation": "The \"Object.getOwnPropertyDescriptors()\" method returns all own property descriptors of a given object."
     },
     {
       "label": "Ogops",
       "kind": "snippet",
       "insertText": "Object.getOwnPropertySymbols(${0:obj})",
       "documentation": "The \"Object.getOwnPropertySymbols()\" method returns an array of all symbol properties found directly upon a given object."
     },
     {
       "label": "Ogpo",
       "kind": "snippet",
       "insertText": "Object.getPrototypeOf(${0:obj})",
       "documentation": "The \"Object.getPrototypeOf()\" method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object."
     },
     {
       "label": "Oi",
       "kind": "snippet",
       "insertText": "Object.is(${1:value1}, ${0:value2})",
       "documentation": "The \"Object.is()\" method determines whether two values are the same value."
     },
     {
       "label": "Oie",
       "kind": "snippet",
       "insertText": "Object.isExtensible(${0:obj})",
       "documentation": "The \"Object.isExtensible()\" method determines if an object is extensible (whether it can have new properties added to it)."
     },
     {
       "label": "Oif",
       "kind": "snippet",
       "insertText": "Object.isFrozen(${0:obj})",
       "documentation": "The \"Object.isFrozen()\" determines if an object is frozen."
     },
     {
       "label": "Ois",
       "kind": "snippet",
       "insertText": "Object.isSealed(${0:obj})",
       "documentation": "The \"Object.isSealed()\" method determines if an object is sealed."
     },
     {
       "label": "Ok",
       "kind": "snippet",
       "insertText": "Object.keys(${0:obj})",
       "documentation": "The \"Object.keys()\" method returns an array of a given object's own property names, in the same order as we get with a normal loop."
     },
     {
       "label": "Ope",
       "kind": "snippet",
       "insertText": "Object.preventExtensions(${0:obj})",
       "documentation": "The \"Object.preventExtensions()\" method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object)."
     },
     {
       "label": ".hasOwnProperty",
       "kind": "snippet",
       "insertText": ".hasOwnProperty(${0:propertyKey})",
       "documentation": "The \"hasOwnProperty()\" method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)."
     },
     {
       "label": ".isPrototypeOf",
       "kind": "snippet",
       "insertText": ".isPrototypeOf(${0:obj})",
       "documentation": "The \"isPrototypeOf()\" method checks if an object exists in another object's prototype chain."
     },
     {
       "label": ".propertyIsEnumerable",
       "kind": "snippet",
       "insertText": ".propertyIsEnumerable(${0:propertyKey})",
       "documentation": "The \"propertyIsEnumerable()\" method returns a Boolean indicating whether the specified property is enumerable."
     },
     {
       "label": "Os",
       "kind": "snippet",
       "insertText": "Object.seal(${0:obj})",
       "documentation": "The \"Object.seal()\" method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable."
     },
     {
       "label": "Ov",
       "kind": "snippet",
       "insertText": "Object.values(${0:obj})",
       "documentation": "The \"Object.setPrototypeOf()\" method returns an array of a given object's own enumerable property values, in the same order as that provided by a \"for...in\" loop (the difference being that a for-in loop enumerates properties in the prototype chain as well)."
     },
     {
       "label": "Sfcc",
       "kind": "snippet",
       "insertText": "String.fromCharCode(${0:codes})",
       "documentation": "The static \"String.fromCharCode()\" method returns a string created from the specified sequence of UTF-16 code units."
     },
     {
       "label": "Sfcp",
       "kind": "snippet",
       "insertText": "String.fromCodePoint(${0:codePoints})",
       "documentation": "The static \"String.fromCodePoint()\" method returns a string created by using the specified sequence of code points."
     },
     {
       "label": ".charAt",
       "kind": "snippet",
       "insertText": ".charAt(${0:index})",
       "documentation": "The \"String\" object's \"charAt()\" method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string."
     },
      {
       "label": ".charCodeAt",
       "kind": "snippet",
       "insertText": ".charCodeAt(${0:index})",
       "documentation": "The \"charCodeAt()\" method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index."
     },
     {
       "label": ".codePointAt",
       "kind": "snippet",
       "insertText": ".codePointAt(${0:index})",
       "documentation": "The \"codePointAt()\" method returns a non-negative integer that is the Unicode code point value."
     },
      {
       "label": ".endsWith",
       "kind": "snippet",
       "insertText": ".endsWith(${1:searchString}${2:, ${0:endPosition}})",
       "documentation": "The \"endsWith()\" method determines whether a string ends with the characters of a specified string, returning \"true\" or \"false\" as appropriate."
     },
      {
       "label": ".localeCompare",
       "kind": "snippet",
       "insertText": ".localeCompare(${1:compareString}${2:, ${3:locales}${4:, {$0\\}}})",
       "documentation": "The \"localeCompare()\" method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order."
     },
      {
       "label": ".match",
       "kind": "snippet",
       "insertText": ".match(${0:regexp})",
       "documentation": "The \"match()\" method retrieves the result of matching a string against a regular expression."
     },
      {
       "label": ".matchAll",
       "kind": "snippet",
       "insertText": ".matchAll(${0:regexp})",
       "documentation": "The \"matchAll()\" method returns an iterator of all results matching a string against a regular expression, including capturing groups."
     },
      {
       "label": ".normalize",
       "kind": "snippet",
       "insertText": ".normalize(${0:form})",
       "documentation": "The \"normalize()\" method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first)."
     },
      {
       "label": ".padEnd",
       "kind": "snippet",
       "insertText": ".padEnd(${1:maxLength}${2:, ${0:fillString}})",
       "documentation": "The \"padEnd()\" method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string."
     },
      {
       "label": ".padStart",
       "kind": "snippet",
       "insertText": ".padStart(${1:maxLength}${2:, ${0:fillString}})",
       "documentation": "The \"padStart()\" method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string."
     },
      {
       "label": ".repeat",
       "kind": "snippet",
       "insertText": ".repeat(${0:count})",
       "documentation": "The \"repeat()\" method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together."
     },
      {
       "label": ".replace",
       "kind": "snippet",
       "insertText": ".replace(${1:subStringOrRegexp}, ${0:newSubstringOrReplacer})",
       "documentation": "The \"replace()\" method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced."
     },
     {
       "label": ".search",
       "kind": "snippet",
       "insertText": ".search(${1:searcher})",
       "documentation": "The \"search()\" method executes a search for a match between a regular expression and this String object."
     },
      {
       "label": ".split",
       "kind": "snippet",
       "insertText": ".split(${1:splitter}${2:, ${0:limit}})",
       "documentation": "The \"split()\" method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split."
     },
      {
       "label": ".startsWith",
       "kind": "snippet",
       "insertText": ".startsWith(${1:searchString}${2:, ${0:position}})",
       "documentation": "The \"startsWith()\" method determines whether a string begins with the characters of a specified string, returning true or false as appropriate."
     },
      {
       "label": ".substring",
       "kind": "snippet",
       "insertText": ".substring(${1:${2:start}${3:, ${0:end}}})",
       "documentation": "The \"substring()\" method returns the part of the string between the start and end indexes, or to the end of the string."
     },
      {
       "label": ".toLocaleLowerCase",
       "kind": "snippet",
       "insertText": ".toLocaleLowerCase()",
       "documentation": "The \"toLocaleLowerCase()\" method returns the calling string value converted to lower case, according to any locale-specific case mappings."
     },
      {
       "label": ".toLocaleUpperCase",
       "kind": "snippet",
       "insertText": ".toLocaleUpperCase()",
       "documentation": "The \"toLocaleUpperCase()\" method returns the calling string value converted to upper case, according to any locale-specific case mappings."
     },
      {
       "label": ".toLowerCase",
       "kind": "snippet",
       "insertText": ".toLowerCase()",
       "documentation": "The \"toLowerCase()\" method returns the calling string value converted to lower case."
     },
      {
       "label": ".toUpperCase",
       "kind": "snippet",
       "insertText": ".toUpperCase()",
       "documentation": "The \"toUpperCase()\" method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one)."
     },
      {
       "label": ".trim",
       "kind": "snippet",
       "insertText": ".trim()",
       "documentation": "The \"trim()\" method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.)."
     },
      {
       "label": ".trimEnd",
       "kind": "snippet",
       "insertText": ".trimEnd()",
       "documentation": "The \"trimEnd()\" method removes whitespace from the end of a string. trimRight() is an alias of this method."
     },
      {
       "label": ".trimStart",
       "kind": "snippet",
       "insertText": ".trimStart()",
       "documentation": "The \"trimStart()\" method removes whitespace from the beginning of a string. trimLeft() is an alias of this method."
     },
      {
       "label": "Sr",
       "kind": "snippet",
       "insertText": "String.raw${1:(${2:callSite}, ${0:substitutions})}",
       "documentation": "The \"trimStart()\" method removes whitespace from the beginning of a string. trimLeft() is an alias of this method."
     },
      {
       "label": "Nif",
       "kind": "snippet",
       "insertText": "Number.isFinite(${0:number})",
       "documentation": "The \"Number.isFinite()\" method determines whether the passed value is a finite number."
     },
      {
       "label": "Nii",
       "kind": "snippet",
       "insertText": "Number.isInteger(${0:number})",
       "documentation": "The \"Number.isInteger()\" method determines whether the passed value is an integer."
     },
     {
       "label": "Nin",
       "kind": "snippet",
       "insertText": "Number.isNaN(${0:number})",
       "documentation": "The \"Number.isNaN()\" method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN()."
     },
     {
       "label": "Nisi",
       "kind": "snippet",
       "insertText": "Number.isSafeInteger(${0:number})",
       "documentation": "The \"Number.isSafeInteger()\" method determines whether the provided value is a number that is a safe integer."
     },
      {
       "label": "Npf",
       "kind": "snippet",
       "insertText": "Number.parseFloat(${0:string})",
       "documentation": "The \"Number.parseFloat()\" method parses a string argument and returns a floating point number."
     },
      {
       "label": "Npi",
       "kind": "snippet",
       "insertText": "Number.parseInt(${1:string}${2:, ${0:radix}})",
       "documentation": "The \"Number.parseInt()\" method parses a string argument and returns an integer of the specified radix or base."
     },
      {
       "label": ".toExponential",
       "kind": "snippet",
       "insertText": ".toExponential(${0:fractionDigits})",
       "documentation": "The \"toExponential()\" method returns a string representing the Number object in exponential notation."
     },
      {
       "label": ".toFixed",
       "kind": "snippet",
       "insertText": ".toFixed(${0:fractionDigits})",
       "documentation": "The \"toFixed()\" method formats a number using fixed-point notation."
     },
      {
       "label": ".toLocaleString",
       "kind": "snippet",
       "insertText": ".toLocaleString(${1:${2:locales}${3:, {$0\\}}})",
       "documentation": "The \"toLocaleString()\" method returns a string with a language-sensitive representation of this number."
     },
      {
       "label": ".toPrecision",
       "kind": "snippet",
       "insertText": ".toPrecision(${0:precision})",
       "documentation": "The \"toPrecision()\" method formats a number using fixed-point notation."
     },
      {
       "label": ".apply",
       "kind": "snippet",
       "insertText": ".apply(${1:this}${2:, ${0:args}})",
       "documentation": "The \"apply()\" method calls a function with a given \"this\" value, and \"arguments\" provided as an array (or an array-like object)."
     },
      {
       "label": ".bind",
       "kind": "snippet",
       "insertText": ".bind(${1:this}${2:, ${0:args}})",
       "documentation": "The \"bind()\" method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called."
     },
      {
       "label": ".call",
       "kind": "snippet",
       "insertText": ".call(${1:this}${2:, ${0:args}})",
       "documentation": "The \"call()\" method calls a function with a given this value and arguments provided individually."
     },
      {
       "label": "Du",
       "kind": "snippet",
       "insertText": "Date.UTC(${1:year}, ${2:month}${3:, ${4:day}${5:, ${6:hours}${7:, ${8:minutes}${9:, ${10:seconds}${11:, ${0:ms}}}}}})",
       "documentation": "The \"Date.UTC()\" method accepts parameters similar to the Date constructor, but treats them as UTC. It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC."
     },
      {
       "label": "Dn",
       "kind": "snippet",
       "insertText": "Date.now()",
       "documentation": "The \"Date.UnowTC()\" method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC."
     },
      {
       "label": "Dp",
       "kind": "snippet",
       "insertText": "Date.parse(${0:dateString})",
       "documentation": "The \"Date.UnowTC()\" method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognized or, in some cases, contains illegal date values (e.g. 2015-02-31)."
     },
      {
       "label": ".getDate",
       "kind": "snippet",
       "insertText": ".getDate()",
       "documentation": "The \"getDate()\" method returns the day of the month for the specified date according to local time."
     },
      {
       "label": ".getDay",
       "kind": "snippet",
       "insertText": ".getDay()",
       "documentation": "The \"getDay()\" method returns the day of the week for the specified date according to local time, where 0 represents Sunday."
     },
      {
       "label": ".getFullYear",
       "kind": "snippet",
       "insertText": ".getFullYear()",
       "documentation": "The \"getFullYear()\" method returns the year of the specified date according to local time."
     },
      {
       "label": ".getHours",
       "kind": "snippet",
       "insertText": ".getHours()",
       "documentation": "The \"getHours()\" method returns the hour for the specified date, according to local time."
     },
      {
       "label": ".getMilliseconds",
       "kind": "snippet",
       "insertText": ".getMilliseconds()",
       "documentation": "The \"getMilliseconds()\" method returns the milliseconds in the specified date according to local time."
     },
      {
       "label": ".getMinutes",
       "kind": "snippet",
       "insertText": ".getMinutes()",
       "documentation": "The \"getMinutes()\" method returns the minutes in the specified date according to local time."
     },
      {
       "label": ".getMonth",
       "kind": "snippet",
       "insertText": ".getMonth()",
       "documentation": "The \"getMonth()\" method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year)."
     },
     {
       "label": ".getSeconds",
       "kind": "snippet",
       "insertText": ".getSeconds()",
       "documentation": "The \"getSeconds()\" method returns the seconds in the specified date according to local time."
     },
   {
       "label": ".getTime",
       "kind": "snippet",
       "insertText": ".getTime()",
       "documentation": "The \"getTime()\" method returns the number of milliseconds* since the Unix Epoch."
     },
     {
       "label": ".getTimezoneOffset",
       "kind": "snippet",
       "insertText": ".getTimezoneOffset()",
       "documentation": "The \"getTimezoneOffset()\" method returns the time zone difference, in minutes, from current locale (host system settings) to UTC."
     },
     {
       "label": ".getUTCDate",
       "kind": "snippet",
       "insertText": ".getUTCDate()",
       "documentation": "The \"getUTCDate()\" method returns the day (date) of the month in the specified date according to universal time."
     },
     {
       "label": ".getUTCDay",
       "kind": "snippet",
       "insertText": ".getUTCDay()",
       "documentation": "The \"getUTCDay()\" method returns the day of the week in the specified date according to universal time, where 0 represents Sunday."
     },
     {
       "label": ".getUTCFullYear",
       "kind": "snippet",
       "insertText": ".getUTCFullYear()",
       "documentation": "The \"getUTCFullYear()\" method returns the year in the specified date according to universal time."
     },
     {
       "label": ".getUTCHours",
       "kind": "snippet",
       "insertText": ".getUTCHours()",
       "documentation": "The \"getUTCHours()\" method returns the hours in the specified date according to universal time."
     },
     {
       "label": ".getUTCMilliseconds",
       "kind": "snippet",
       "insertText": ".getUTCMilliseconds()",
       "documentation": "The \"getUTCMilliseconds()\" method returns the milliseconds portion of the time object's value."
     },
     {
       "label": ".getUTCMinutes",
       "kind": "snippet",
       "insertText": ".getUTCMinutes()",
       "documentation": "The \"getUTCMinutes()\" method returns the minutes in the specified date according to universal time."
     },
     {
       "label": ".getUTCMonth",
       "kind": "snippet",
       "insertText": ".getUTCMonth()",
       "documentation": "The \"getUTCMonth()\" method the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year)."
     },
     {
       "label": ".getUTCSeconds",
       "kind": "snippet",
       "insertText": ".getUTCSeconds()",
       "documentation": "The \"getUTCSeconds()\" method returns the seconds in the specified date according to universal time."
     },
     {
       "label": ".setDate",
       "kind": "snippet",
       "insertText": ".setDate(${0:date})",
       "documentation": "The \"setDate()\" method sets the day of the Date object relative to the beginning of the currently set month."
     },
     {
       "label": ".setFullYear",
       "kind": "snippet",
       "insertText": ".setFullYear(${1:year}${2:, ${3:month}${4:, ${0:day}}})",
       "documentation": "The \"setFullYear()\" method sets the full year for a specified date according to local time. Returns new timestamp."
     },
     {
       "label": ".setHours",
       "kind": "snippet",
       "insertText": ".setHours(${1:hours}${2:, ${3:minutes}${4:, ${5:seconds}${6:, ${0:milliseconds}}}})",
       "documentation": "The \"setHours()\" method sets the hours for a specified date according to local time, and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance."
     },
     {
       "label": ".setMilliseconds",
       "kind": "snippet",
       "insertText": ".setMilliseconds(${0:})",
       "documentation": "The \"setMilliseconds(milliseconds)\" method sets the milliseconds for a specified date according to local time."
     },
     {
       "label": ".setMinutes",
       "kind": "snippet",
       "insertText": ".setMinutes(${1:minutes}${2:, ${3:seconds}${4:, ${0:milliseconds}}})",
       "documentation": "The \"setMinutes()\" method sets the minutes for a specified date according to local time."
     },
     {
       "label": ".setMonth",
       "kind": "snippet",
       "insertText": ".setMonth(${1:month}${2:, ${0:date}})",
       "documentation": "The \"setMonth()\" method sets the month for a specified date according to the currently set year."
     },
     {
       "label": ".setSeconds",
       "kind": "snippet",
       "insertText": ".setSeconds(${1:seconds}${2:, ${0:milliseconds}})",
       "documentation": "The \"setSeconds()\" method sets the seconds for a specified date according to local time."
     },
     {
       "label": ".setTime",
       "kind": "snippet",
       "insertText": ".setTime(${0:time})",
       "documentation": "The \"setTime()\" method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC."
     },
     {
       "label": ".setUTCDate",
       "kind": "snippet",
       "insertText": ".setUTCDate(${0:date})",
       "documentation": "The \"setUTCDate()\" method sets the day of the month for a specified date according to universal time."
     },
     {
       "label": ".setUTCFullYear",
       "kind": "snippet",
       "insertText": ".setUTCFullYear(${1:year}${2:, ${3:month}${4:, ${0:date}}})",
       "documentation": "The \"setUTCFullYear()\" method sets the full year for a specified date according to universal time."
     },
     {
       "label": ".setUTCHours",
       "kind": "snippet",
       "insertText": ".setUTCHours(${1:hours}${2:, ${3:minutes}${4:, ${5:seconds}${6:, ${0:milliseconds}}}})",
       "documentation": "The \"setUTCHours()\" method sets the hour for a specified date according to universal time, and returns the number of milliseconds since  January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance."
     },
     {
       "label": ".setUTCMilliseconds",
       "kind": "snippet",
       "insertText": ".setUTCMilliseconds(${0:})",
       "documentation": "The \"setUTCMilliseconds(milliseconds)\" method sets the milliseconds for a specified date according to universal time."
     },
     {
       "label": ".setUTCMinutes",
       "kind": "snippet",
       "insertText": ".setUTCMinutes(${1:minutes}${2:, ${3:seconds}${4:, ${0:milliseconds}}})",
       "documentation": "The \"setUTCMinutes()\" method sets the minutes for a specified date according to universal time."
     },
     {
       "label": ".setUTCMonth",
       "kind": "snippet",
       "insertText": ".setUTCMonth(${1:month}${2:, ${0:date}})",
       "documentation": "The \"setUTCMonth()\" method sets the month for a specified date according to universal time."
     },
     {
       "label": ".setUTCSeconds",
       "kind": "snippet",
       "insertText": ".setUTCSeconds(${1:seconds}${2:, ${0:milliseconds}})",
       "documentation": "The \"setUTCSeconds()\" method sets the seconds for a specified date according to universal time."
     },
     {
       "label": ".toDateString",
       "kind": "snippet",
       "insertText": ".toDateString()",
       "documentation": "The \"toDateString()\" method returns the date portion of a Date object in English in the following format separated by spaces:\n\n1. First three letters of the week day name\n\t2. First three letters of the month name\n\t3. Two digit day of the month, padded on the left a zero if necessary\n\t4. Four digit year (at least), padded on the left with zeros if necessary\n\nE.g. \"Thu Jan 01 1970\"."
     },
     {
       "label": ".toISOString",
       "kind": "snippet",
       "insertText": ".toISOString()",
       "documentation": "The \"toISOString()\" method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (\"YYYY-MM-DDTHH:mm:ss.sssZ\" or \"±YYYYYY-MM-DDTHH:mm:ss.sssZ\", respectively). The timezone is always zero UTC offset, as denoted by the suffix \"Z\"."
     },
     {
       "label": ".toJSON",
       "kind": "snippet",
       "insertText": ".toJSON()",
       "documentation": "The \"toJSON()\" method returns a string representation of the Date object."
     },
     {
       "label": ".toLocaleDateString",
       "kind": "snippet",
       "insertText": ".toLocaleDateString(${1:${2:locales}${3:, {$0\\}}})",
       "documentation": "The \"toLocaleDateString()\" method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent."
     },
     {
       "label": ".toLocaleString",
       "kind": "snippet",
       "insertText": ".toLocaleString(${1:${2:locales}${3:, {$0\\}}})",
       "documentation": "The \"toLocaleString()\" method returns a string with a language sensitive representation of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent."
     },
      {
       "label": ".toLocaleTimeString",
       "kind": "snippet",
       "insertText": ".toLocaleTimeString(${1:${2:locales}${3:, {$0\\}}})",
       "documentation": "The \"toLocaleTimeString()\" method returns a string with a language sensitive representation of the time portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent."
     },
      {
       "label": ".toTimeString",
       "kind": "snippet",
       "insertText": ".toTimeString()",
       "documentation": "The \"toTimeString()\" method returns the time portion of a Date object in human readable form in American English."
     },
      {
       "label": ".toUTCString",
       "kind": "snippet",
       "insertText": ".toUTCString()",
       "documentation": "The \"toUTCString()\" method returns the time portion of a Date object in human readable form in American English."
     },
      {
       "label": "Ma",
       "kind": "snippet",
       "insertText": "Math.abs(${0:x})",
       "documentation": "The \"Math.abs()\" function returns the absolute value of a number"
     },
      {
       "label": "Macs",
       "kind": "snippet",
       "insertText": "Math.acos(${0:x})",
       "documentation": "The \"Math.acos()\" function returns the arccosine (in radians) of a number"
     },
      {
       "label": "Macsh",
       "kind": "snippet",
       "insertText": "Math.acosh(${0:x})",
       "documentation": "The \"Math.acosh()\" function returns the hyperbolic arc-cosine of a number"
     },
      {
       "label": "Mas",
       "kind": "snippet",
       "insertText": "Math.asin(${0:x})",
       "documentation": "The \"Math.asin()\" function returns the arcsine (in radians) of a number"
     },
      {
       "label": "Mash",
       "kind": "snippet",
       "insertText": "Math.asinh(${0:x})",
       "documentation": "The \"Math.asinh()\" function returns the hyperbolic arcsine of a number"
     },
     {
       "label": "Mat",
       "kind": "snippet",
       "insertText": "Math.atan(${0:x})",
       "documentation": "The \"Math.atan()\" function returns the arctangent (in radians) of a number"
     },
      {
       "label": "Mat2",
       "kind": "snippet",
       "insertText": "Math.atan2(${1:y}, ${0:x})",
       "documentation": "The \"Math.atan2()\" function returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y), for Math.atan2(y,x)."
     },
      {
       "label": "Math",
       "kind": "snippet",
       "insertText": "Math.atanh(${0:x})",
       "documentation": "The \"Math.atanh()\" function returns the hyperbolic arctangent of a number"
     },
      {
       "label": "Mcb",
       "kind": "snippet",
       "insertText": "Math.cbrt(${0:x})",
       "documentation": "The \"Math.cbrt()\" function returns the cube root of a number"
     },
      {
       "label": "Mceil",
       "kind": "snippet",
       "insertText": "Math.ceil(${0:x})",
       "documentation": "The \"Math.ceil()\" function always rounds a number up to the next largest whole number or integer."
     },
      {
       "label": "Mclz",
       "kind": "snippet",
       "insertText": "Math.clz32(${0:x})",
       "documentation": "The \"Math.clz32()\" function returns the number of leading zero bits in the 32-bit binary representation of a number."
     },
      {
       "label": "Mcos",
       "kind": "snippet",
       "insertText": "Math.cos(${0:x})",
       "documentation": "The \"Math.cos()\" static function returns the cosine of the specified angle, which must be specified in radians"
     },
      {
       "label": "Mcosh",
       "kind": "snippet",
       "insertText": "Math.cosh(${0:x})",
       "documentation": "The \"Math.cosh()\" function the hyperbolic cosine of a number"
     },
      {
       "label": "Mexp",
       "kind": "snippet",
       "insertText": "Math.exp(${0:x})",
       "documentation": "The \"Math.exp()\" function returns e^x, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms."
     },
      {
       "label": "Mexpm1",
       "kind": "snippet",
       "insertText": "Math.expm1(${0:x})",
       "documentation": "The \"Math.expm1()\" function returns \"e^x - 1\", where x is the argument, and e the base of the natural logarithms."
     },
      {
       "label": "Mfl",
       "kind": "snippet",
       "insertText": "Math.floor(${0:x})",
       "documentation": "The \"Math.floor()\" function returns the largest integer less than or equal to a given number."
     },
      {
       "label": "Mfr",
       "kind": "snippet",
       "insertText": "Math.fround(${0:x})",
       "documentation": "The \"Math.fround()\" function returns the nearest 32-bit single precision float representation of a Number."
     },
      {
       "label": "Mhypot",
       "kind": "snippet",
       "insertText": "Math.hypot(${0:numbers})",
       "documentation": "The \"Math.hypot()\" function returns the square root of the sum of squares of its arguments"
     },
      {
       "label": "Mim",
       "kind": "snippet",
       "insertText": "Math.imul(${1:a}, ${0:b})",
       "documentation": "The \"Math.imul()\" function returns the result of the C-like 32-bit multiplication of the two parameters."
     },
      {
       "label": "Mlg",
       "kind": "snippet",
       "insertText": "Math.log(${0:x})",
       "documentation": "The \"Math.log()\" function returns the natural logarithm (base e) of a number"
     },
      {
       "label": "Mlg10",
       "kind": "snippet",
       "insertText": "Math.log10(${0:x})",
       "documentation": "The \"Math.log10()\" function returns the base 10 logarithm of a number"
     },
      {
       "label": "Mlg1p",
       "kind": "snippet",
       "insertText": "Math.log1p(${0:x})",
       "documentation": "The \"Math.log1p()\" function returns the absolute value of a number"
     },
      {
       "label": "Mlg2",
       "kind": "snippet",
       "insertText": "Math.log2(${0:x})",
       "documentation": "The \"Math.log2()\" function returns the base 2 logarithm of a number"
     },
      {
       "label": "Mmax",
       "kind": "snippet",
       "insertText": "Math.max(${0:values})",
       "documentation": "The \"Math.max()\" function the largest of zero or more numbers."
     },
      {
       "label": "Mmin",
       "kind": "snippet",
       "insertText": "Math.min(${0:values})",
       "documentation": "The \"Math.min()\" function returns the absolute value of a number"
     },
      {
       "label": "Mp",
       "kind": "snippet",
       "insertText": "Math.pow(${1:base}, ${0:exponent})",
       "documentation": "The \"Math.pow()\" function returns the base to the exponent power, that is, base^exponent."
     },
      {
       "label": "Mrdm",
       "kind": "snippet",
       "insertText": "Math.random()",
       "documentation": "The \"Math.random()\" function eturns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user."
     },
      {
       "label": "Mrd",
       "kind": "snippet",
       "insertText": "Math.round(${0:x})",
       "documentation": "The \"Math.round()\" function returns the value of a number rounded to the nearest integer."
     },
      {
       "label": "Msign",
       "kind": "snippet",
       "insertText": "Math.sign(${0:x})",
       "documentation": "The \"Math.sign()\" function returns the sign of a number, indicating whether the number is positive, negative or zero."
     },
      {
       "label": "Msin",
       "kind": "snippet",
       "insertText": "Math.sin(${0:x})",
       "documentation": "The \"Math.sin()\" function returns the sine of a number."
     },
      {
       "label": "Msinh",
       "kind": "snippet",
       "insertText": "Math.sinh(${0:x})",
       "documentation": "The \"Math.sinh()\" function returns the hyperbolic sine of a number"
     },
      {
       "label": "Msqrt",
       "kind": "snippet",
       "insertText": "Math.sqrt(${0:x})",
       "documentation": "The \"Math.sqrt()\" function returns the square root of a number,"
     },
      {
       "label": "Mtan",
       "kind": "snippet",
       "insertText": "Math.tan(${0:x})",
       "documentation": "The \"Math.tan()\" function returns the tangent of a number."
     },
      {
       "label": "Mtanh",
       "kind": "snippet",
       "insertText": "Math.tanh(${0:x})",
       "documentation": "The \"Math.tan()\" function returns the hyperbolic tangent of a number"
     },
      {
       "label": "Mtrunc",
       "kind": "snippet",
       "insertText": "Math.trunc(${0:x})",
       "documentation": "The \"Math.trunc()\" function returns the integer part of a number by removing any fractional digits."
     },
      {
       "label": ".exec",
       "kind": "snippet",
       "insertText": ".exec(${0:string})",
       "documentation": "The \"exec()\" method executes a search for a match in a specified string. Returns a result array, or null."
     },
      {
       "label": ".test",
       "kind": "snippet",
       "insertText": ".test(${0:string})",
       "documentation": "The \"test()\" method executes a search for a match between a regular expression and a specified string. Returns true or false."
     },
      {
       "label": "Jp",
       "kind": "snippet",
       "insertText": "JSON.parse(${1:text}${2:, ${0:reviver}})",
       "documentation": "The \"JSON.parse()\" method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned."
     },
      {
       "label": "Js",
       "kind": "snippet",
       "insertText": "JSON.stringify(${1:value}${2:, ${3:replacer}${4:, ${0:space}}})",
       "documentation": "The \"JSON.stringify()\" method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified."
     },
      {
       "label": "cls",
       "kind": "snippet",
       "insertText": ["class ${1:Name} {", "\t$0", "}"],
       "documentation": "Create a class."
     },
      {
       "label": "clsx",
       "kind": "snippet",
       "insertText": [
         "class ${1:Name} extends ${2:BaseClass} {",
         "\tconstructor(${3:arguments}) {",
         "\t\tsuper($3)",
         "\t\t$0",
         "\t}",
         "}"
       ],
       "documentation": "Create a class that extended base class."
     },
      {
       "label": "cstr",
       "kind": "snippet",
       "insertText": ["constructor(${1:arguments}) {", "${2:\tsuper(${1})}", "\t$0", "}"],
       "documentation": "Constructor"
     },
      {
       "label": "ep",
       "kind": "snippet",
       "insertText": "export ${0:member}",
       "documentation": "Export individual features"
     },
      {
       "label": "epl",
       "kind": "snippet",
       "insertText": "export { ${0:names} \\}",
       "documentation": "Export list"
     },
      {
       "label": "epd",
       "kind": "snippet",
       "insertText": "export default ${1:member}",
       "documentation": "Export default module"
     },
      {
       "label": "epf",
       "kind": "snippet",
       "insertText": "export ${0:*} from '$1'",
       "documentation": "Export aggregating modules"
     },
      {
       "label": "ip",
       "kind": "snippet",
       "insertText": "import '$0'",
       "documentation": "Import a module for its side effects only"
     },
      {
       "label": "ipd",
       "kind": "snippet",
       "insertText": "import ${0:moduleName} from '$1'",
       "documentation": "Importing defaults"
     },
      {
       "label": "ipem",
       "kind": "snippet",
       "insertText": "import * as ${0:moduleName} from '$1'",
       "documentation": "Import an entire module's contents"
     },
      {
       "label": "ipme",
       "kind": "snippet",
       "insertText": "import { $0 } from '$1'",
       "documentation": "Import multiple exports from module"
     },
      {
       "label": "ipdn",
       "kind": "snippet",
       "insertText": ["import('$1').then((${2:module}) => {", "\t$0", "})"],
       "documentation": "Dynamic Imports"
     },
      {
       "label": "r",
       "kind": "snippet",
       "insertText": "return $0",
       "documentation": "return"
     },
      {
       "label": "rth",
       "kind": "snippet",
       "insertText": "return this",
       "documentation": "return this"
     },
      {
       "label": "rn",
       "kind": "snippet",
       "insertText": "return null",
       "documentation": "return null"
     },
      {
       "label": "rt",
       "kind": "snippet",
       "insertText": "return true",
       "documentation": "return true"
     },
      {
       "label": "rf",
       "kind": "snippet",
       "insertText": "return false",
       "documentation": "return false"
     },
      {
       "label": "rp",
       "kind": "snippet",
       "insertText": ["return new Promise((resolve, reject) => {", "\t$0", "})"],
       "documentation": "return new promise"
     },
      {
       "label": "rpj",
       "kind": "snippet",
       "insertText": "return Promise.reject($0)",
       "documentation": "return Promise.reject"
     },
      {
       "label": "rps",
       "kind": "snippet",
       "insertText": "return Promise.resolve($0)",
       "documentation": "return Promise.resolve"
     },
      {
       "label": "np",
       "kind": "snippet",
       "insertText": ["new Promise((resolve, reject) => {", "\t$0", "})"],
       "documentation": "New Promise"
     },
      {
       "label": ".then",
       "kind": "snippet",
       "insertText": [".then((${2:value}) => {", "\t$0", "})"],
       "documentation": "Promise.then"
     },
      {
       "label": ".catch",
       "kind": "snippet",
       "insertText": [".catch((${2:value}) => {", "\t$0", "})"],
       "documentation": "Promise.catch"
     },
      {
       "label": "v",
       "kind": "snippet",
       "insertText": "var ${0:name}",
       "documentation": "var statement"
     },
      {
       "label": "v=",
       "kind": "snippet",
       "insertText": "var ${1:name} = ${0:value}",
       "documentation": "var assignment"
     },
      {
       "label": "l",
       "kind": "snippet",
       "insertText": "let ${1:name}",
       "documentation": "let statement"
     },
      {
       "label": "l=",
       "kind": "snippet",
       "insertText": "let ${1:name} = ${2:value}",
       "documentation": "let assignment"
     },
      {
       "label": "co",
       "kind": "snippet",
       "insertText": "const ${0:name}",
       "documentation": "const statement"
     },
      {
       "label": "co=",
       "kind": "snippet",
       "insertText": "const ${2:name} = ${1:value}",
       "documentation": "const assignment"
     },
      {
       "label": "to",
       "kind": "snippet",
       "insertText": "${1:condition} ? ${2:value1} : ${3:value2}"
     },
      {
       "label": "el",
       "kind": "snippet",
       "insertText": ["else {", "\t$0", "}"],
       "documentation": "else statement"
     },
      {
       "label": "ei",
       "kind": "snippet",
       "insertText": ["else if (${1:condition}) {", "\t$0", "}"],
       "documentation": "else if statement"
     },
      {
       "label": "fl",
       "kind": "snippet",
       "insertText": ["for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; $1 < $2; $1++) {", "\t$0", "}"],
       "documentation": "for loop"
     },
      {
       "label": "fi",
       "kind": "snippet",
       "insertText": [
         "for (let ${1:key} in ${2:source}) {",
         "\tif (Object.hasOwnProperty.call(${2:source}, ${1:key})) {",
         "\t\t$0",
         "\t}",
         "}"
       ],
       "documentation": "for in loop"
     },
      {
       "label": "fo",
       "kind": "snippet",
       "insertText": ["for (const ${2:key} of ${1:source}) {", "\t$0", "}"],
       "documentation": "for of loop"
     },
      {
       "label": "wl",
       "kind": "snippet",
       "insertText": ["while (${1:condition}) {", "\t$0", "}"],
       "documentation": "while loop"
     },
     {
       "label": "tc",
       "kind": "snippet",
       "insertText": ["try {", "\t$0", "} catch (${1:err}) {", "\t", "}"],
       "documentation": "try/catch"
     },
      {
       "label": "tf",
       "kind": "snippet",
       "insertText": ["try {", "\t$0", "} finally {", "\t", "}"],
       "documentation": "try/finally"
     },
      {
       "label": "tcf",
       "kind": "snippet",
       "insertText": ["try {", "\t$0", "} catch (${1:err}) {", "\t", "} finally {", "\t", "}"],
       "documentation": "try/catch/finally"
     },
      {
       "label": "sw",
       "kind": "snippet",
       "insertText": [
         "switch (${1:expr}) {",
         "\tcase ${2:value}:",
         "\t\treturn $0",
         "\tdefault:",
         "\t\treturn",
         "}"
       ],
       "documentation": "switch case"
     },
      {
       "label": "af",
       "kind": "snippet",
       "insertText": ["(${1:arguments}) => ${2:statement}"],
       "documentation": "arrow function"
     },
      {
       "label": "afb",
       "kind": "snippet",
       "insertText": ["(${1:arguments}) => {", "\t$0", "}"],
       "documentation": "arrow function with insertText"
     },
      {
       "label": "f",
       "kind": "snippet",
       "insertText": ["function(${1:arguments}) {$0}"],
       "documentation": "anonymous function"
     },
      {
       "label": "fn",
       "kind": "snippet",
       "insertText": ["function ${1:name}(${2:arguments}) {", "\t$0", "}"],
       "documentation": "named function"
     },
      {
       "label": "iife",
       "kind": "snippet",
       "insertText": ["(function(${1:arguments}) {", "\t$0", "})($2)"],
       "documentation": "immediately-invoked function expression"
     },
      {
       "label": "gf",
       "kind": "snippet",
       "insertText": ["function* (${1:arguments}) {", "\t$0", "}"],
       "documentation": "generator"
     },
      {
       "label": "gfn",
       "kind": "snippet",
       "insertText": ["function* ${1:name}(${2:arguments}) {", "\t$0", "}"],
       "documentation": "named generator"
     },
      {
       "label": "us",
       "kind": "snippet",
       "insertText": "'use strict'",
       "documentation": "use strict"
     },
      {
       "label": "re",
       "kind": "snippet",
       "insertText": "require('${0:module}')",
       "documentation": "require"
     },
      {
       "label": "eps",
       "kind": "snippet",
       "insertText": "exports.${1:member} = ${0:value}",
       "documentation": "exports.member"
     },
      {
       "label": "meps",
       "kind": "snippet",
       "insertText": "module.exports = ${0:name}",
       "documentation": "module.exports"
     },
      {
       "label": "st",
       "kind": "snippet",
       "insertText": ["setTimeout(() => {", "\t$0", "}, ${1:delay})"],
       "documentation": "SetTimeout"
     },
      {
       "label": "si",
       "kind": "snippet",
       "insertText": ["setInterval(() => {", "\t$0", "}, ${1:delay})"],
       "documentation": "setInterval"
     },
      {
       "label": "sim",
       "kind": "snippet",
       "insertText": ["setImmediate(() => {", "\t$0", "})"],
       "documentation": "setImmediate"
     },
      {
       "label": "S",
       "kind": "snippet",
       "insertText": "String",
       "documentation": "String"
     },
      {
       "label": "N",
       "kind": "snippet",
       "insertText": "Number",
       "documentation": "Number"
     },
      {
       "label": "A",
       "kind": "snippet",
       "insertText": "Array",
       "documentation": "Array"
     },
      {
       "label": "D",
       "kind": "snippet",
       "insertText": "Date",
       "documentation": "Date"
     },
      {
       "label": "Rx",
       "kind": "snippet",
       "insertText": "RegExp",
       "documentation": "RegExp"
     },
      {
       "label": "M",
       "kind": "snippet",
       "insertText": "Math",
       "documentation": "Math"
     },
      {
       "label": "tof",
       "kind": "snippet",
       "insertText": "typeof ${1:source} ${2|===,!==|} '${3|undefined,object,boolean,number,bigint,string,symbol,function,object|}'",
       "documentation": "Type of"
     },
      {
       "label": "iof",
       "kind": "snippet",
       "insertText": "${1:source} instanceof ${0:Object}",
       "documentation": "Instance of"
     },
      {
       "label": ".addEventListener",
       "kind": "snippet",
       "insertText": ".addEventListener('${1:type}', ${2:listener}${3:, ${4:options}})",
       "documentation": "The EventTarget method \"addEventListener()\" sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest)."
     },
      {
       "label": ".removeEventListener",
       "kind": "snippet",
       "insertText": ".removeEventListener('${1:type}', ${2:listener}${3:, ${4:options}})",
       "documentation": "The EventTarget.removeEventListener() method removes from the EventTarget an event listener previously registered with EventTarget.addEventListener(). The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal"
     },
      {
       "label": "gei",
       "kind": "snippet",
       "insertText": "document.getElementById('#${0:id}')",
       "documentation": "The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly."
     },
      {
       "label": "gec",
       "kind": "snippet",
       "insertText": "${1:document}.getElementsByClassName('${0:className}')",
       "documentation": "The Element method getElementsByClassName() returns a live HTMLCollection which contains every descendant element which has the specified class name or names.\n\nThe method getElementsByClassName() on the Document interface works essentially the same way, except it acts on the entire document, starting at the document root."
     },
      {
       "label": "get",
       "kind": "snippet",
       "insertText": "${1:document}.getElementsByTagName('${2:tag}')",
       "documentation": "The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name. All descendants of the specified element are searched, but not the element itself. The returned list is live, which means it updates itself with the DOM tree automatically. Therefore, there is no need to call Element.getElementsByTagName() with the same element and arguments repeatedly if the DOM changes in between calls."
     },
     {
       "label": "qs",
       "kind": "snippet",
       "insertText": ["${1:document}.querySelector('${2:selector}')"],
       "documentation": "The querySelector() method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors."
     },
     {
       "label": "qsa",
       "kind": "snippet",
       "insertText": "${1:document}.querySelectorAll('${2:selector}')",
       "documentation": "The Element method querySelectorAll() returns a static (not live) NodeList representing a list of elements matching the specified group of selectors which are descendants of the element on which the method was called."
     },
      {
       "label": "kv",
       "kind": "snippet",
       "insertText": "${1:key}: ${0:value}",
       "documentation": "key value pair"
     },
      {
       "label": "elda",
       "kind": "snippet",
       "insertText": "/* eslint-disable */",
       "documentation": "Disable all rules for the rest of the file"
     },
      {
       "label": "elea",
       "kind": "snippet",
       "insertText": "/* eslint-enable */",
       "documentation": "Enable all rules for the rest of the file"
     },
      {
       "label": "eldr",
       "kind": "snippet",
       "insertText": "/* eslint-disable ${0:rule} */",
       "documentation": "Disable the listed rules for the rest of the file"
     },
      {
       "label": "eler",
       "kind": "snippet",
       "insertText": "/* eslint-enable ${0:rule} */",
       "documentation": "Enable the listed rules for the rest of the file"
     },
      {
       "label": "eldl",
       "kind": "snippet",
       "insertText": "// eslint-disable-line",
       "documentation": "Disables all rules for the current line"
     },
      {
       "label": "elel",
       "kind": "snippet",
       "insertText": "// eslint-enable-line",
       "documentation": "Enables all rules for the current line"
     },
      {
       "label": "eldlr",
       "kind": "snippet",
       "insertText": "// eslint-disable-line ${0:rule}",
       "documentation": "Disables the listed rules for the current line"
     },
      {
       "label": "elelr",
       "kind": "snippet",
       "insertText": "// eslint-enable-line ${0:rule}",
       "documentation": "Enables the listed rules for the current line"
     },
      {
       "label": "eldnl",
       "kind": "snippet",
       "insertText": "// eslint-disable-next-line",
       "documentation": "Disables all rules for the following line"
     },
      {
       "label": "elenl",
       "kind": "snippet",
       "insertText": "// eslint-enable-next-line",
       "documentation": "Enables all rules for the following line"
     },
     {
       "label": "eldnlr",
       "kind": "snippet",
       "insertText": "// eslint-disable-next-line ${0:rule}",
       "documentation": "Disables the listed rules for the following line"
     },
     {
       "label": "elenlr",
       "kind": "snippet",
       "insertText": "// eslint-enable-next-line ${0:rule}",
       "documentation": "Enables the listed rules for the following line"
     },
     {
       "label": "dsc",
       "kind": "snippet",
       "insertText": ["describe('${1:describe}', () => {", "\t$0", "})"],
       "documentation": "Creates a block that groups together several related tests in one 'test suite'"
     },
     {
       "label": "it",
       "kind": "snippet",
       "insertText": ["it('${1:describe}', () => {", "\t$0", "}${2:, ${3:timeout}})"],
       "documentation": "creates a test suite"
     }
   
   ]