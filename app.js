import {
  forEachCb,
  mapCb,
  exampleArray,
  filterCb,
  someCb,
  everyCb,
  reduceCb,
} from './task/utilis';

import {
  forEachFn,
  mapFn,
  entriesFn,
  filterFn,
  someFn,
  everyFn,
  reduceFn,
} from './task/index';

forEachFn(exampleArray, forEachCb);
mapFn(exampleArray, mapCb);
entriesFn(exampleArray);
filterFn(exampleArray, filterCb);
someFn(exampleArray, someCb);
everyFn(exampleArray, everyCb);
reduceFn(exampleArray, reduceCb);
