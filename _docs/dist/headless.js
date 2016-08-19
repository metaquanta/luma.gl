'use strict';

var _isBrowser = require('./utils/is-browser');

var headlessGLTypes = void 0;
var headlessGL = void 0;
try {
  headlessGLTypes = require('gl/wrap');
  headlessGL = require('gl');
} catch (error) {
  /* ignore */
}

var glob = (0, _isBrowser.getGlobal)();
glob.headlessGLTypes = headlessGLTypes;
glob.headlessGL = headlessGL;

// TODO - not necessary - Make sure webgl-types initializes with right types
require('./webgl/webgl-types');

// Now import standard luma.gl package
module.exports = require('./index');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWFkbGVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUksd0JBQUo7QUFDQSxJQUFJLG1CQUFKO0FBQ0EsSUFBSTtBQUNGLG9CQUFrQixRQUFRLFNBQVIsQ0FBbEI7QUFDQSxlQUFhLFFBQVEsSUFBUixDQUFiO0FBQ0QsQ0FIRCxDQUdFLE9BQU8sS0FBUCxFQUFjOztBQUVmOztBQUVELElBQU0sT0FBTywyQkFBYjtBQUNBLEtBQUssZUFBTCxHQUF1QixlQUF2QjtBQUNBLEtBQUssVUFBTCxHQUFrQixVQUFsQjs7O0FBR0EsUUFBUSxxQkFBUjs7O0FBR0EsT0FBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJoZWFkbGVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0R2xvYmFsfSBmcm9tICcuL3V0aWxzL2lzLWJyb3dzZXInO1xuXG5sZXQgaGVhZGxlc3NHTFR5cGVzO1xubGV0IGhlYWRsZXNzR0w7XG50cnkge1xuICBoZWFkbGVzc0dMVHlwZXMgPSByZXF1aXJlKCdnbC93cmFwJyk7XG4gIGhlYWRsZXNzR0wgPSByZXF1aXJlKCdnbCcpO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgLyogaWdub3JlICovXG59XG5cbmNvbnN0IGdsb2IgPSBnZXRHbG9iYWwoKTtcbmdsb2IuaGVhZGxlc3NHTFR5cGVzID0gaGVhZGxlc3NHTFR5cGVzO1xuZ2xvYi5oZWFkbGVzc0dMID0gaGVhZGxlc3NHTDtcblxuLy8gVE9ETyAtIG5vdCBuZWNlc3NhcnkgLSBNYWtlIHN1cmUgd2ViZ2wtdHlwZXMgaW5pdGlhbGl6ZXMgd2l0aCByaWdodCB0eXBlc1xucmVxdWlyZSgnLi93ZWJnbC93ZWJnbC10eXBlcycpO1xuXG4vLyBOb3cgaW1wb3J0IHN0YW5kYXJkIGx1bWEuZ2wgcGFja2FnZVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG4iXX0=