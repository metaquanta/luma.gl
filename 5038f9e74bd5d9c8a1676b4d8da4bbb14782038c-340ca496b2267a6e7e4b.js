(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{LG3w:function(e,t,r){"use strict";r.d(t,"a",(function(){return M}));r("E5k/"),r("ofTv"),r("YbXK"),r("cFtU"),r("pJf4"),r("q8oJ"),r("8npG"),r("rzGZ"),r("m210"),r("4DPX");var n=r("73Rc"),s=r.n(n),i=(r("gu/5"),r("eoYm"),r("sC2a"),r("HQhv"),r("ayeP")),a="out vec4 transform_output;\nvoid main() {\n  transform_output = vec4(0);\n}";function u(e,t){t=Array.isArray(t)?t:[t];var r=e.replace(/^\s+/,"").split(/\s+/),n=r[0],s=r[1],i=r[2];return t.includes(n)&&s&&i?{qualifier:n,type:s,name:i.split(";")[0]}:null}function o(e){var t=void 0===e?{}:e,r=t.version,n=void 0===r?100:r,s=t.input,u=t.inputType,o=t.output;if(!s)return 300===n?"#version 300 es\nout vec4 transform_output;\nvoid main() {\n  transform_output = vec4(0);\n}":n>300?"#version "+n+"\n"+a:"void main() {gl_FragColor = vec4(0);}";var f=function(e,t){switch(t){case"float":return"vec4("+e+", 0.0, 0.0, 1.0)";case"vec2":return"vec4("+e+", 0.0, 1.0)";case"vec3":return"vec4("+e+", 1.0)";case"vec4":return e;default:return Object(i.a)(!1),null}}(s,u);return n>=300?"#version "+n+" "+(300===n?"es":"")+"\nin "+u+" "+s+";\nout vec4 "+o+";\nvoid main() {\n  "+o+" = "+f+";\n}":"varying "+u+" "+s+";\nvoid main() {\n  gl_FragColor = "+f+";\n}"}r("Dq+y"),r("Ggvi");var f=r("lHlH"),c=r("3LCa"),d=r("GInI"),l=r("Iq2B");function h(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.currentIndex=0,this.feedbackMap={},this.varyings=null,this.bindings=[],this.resources={},this._initialize(t),Object.seal(this)}var t=e.prototype;return t.setupResources=function(e){for(var t,r=h(this.bindings);!(t=r()).done;){var n=t.value;this._setupTransformFeedback(n,e)}},t.updateModelProps=function(e){void 0===e&&(e={});var t=this.varyings;return t.length>0&&(e=Object.assign({},e,{varyings:t})),e},t.getDrawOptions=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],r=t.sourceBuffers,n=t.transformFeedback;return{attributes:Object.assign({},r,e.attributes),transformFeedback:n}},t.swap=function(){return!!this.feedbackMap&&(this.currentIndex=this._getNextIndex(),!0)},t.update=function(e){void 0===e&&(e={}),this._setupBuffers(e)},t.getBuffer=function(e){var t=this.bindings[this.currentIndex].feedbackBuffers,r=e?t[e]:null;return r?r instanceof c.a?r:r.buffer:null},t.getData=function(e){var t=(void 0===e?{}:e).varyingName,r=this.getBuffer(t);return r?r.getData():null},t.delete=function(){for(var e in this.resources)this.resources[e].delete()},t._initialize=function(e){void 0===e&&(e={}),this._setupBuffers(e),this.varyings=e.varyings||Object.keys(this.bindings[this.currentIndex].feedbackBuffers),this.varyings.length>0&&Object(l.a)(Object(f.e)(this.gl))},t._getFeedbackBuffers=function(e){var t=e.sourceBuffers,r=void 0===t?{}:t,n={};if(this.bindings[this.currentIndex]&&Object.assign(n,this.bindings[this.currentIndex].feedbackBuffers),this.feedbackMap)for(var s in this.feedbackMap){var i=this.feedbackMap[s];s in r&&(n[i]=s)}for(var a in Object.assign(n,e.feedbackBuffers),n){var u=n[a];if("string"==typeof u){var o=r[u],f=o.byteLength,c=o.usage,d=o.accessor;n[a]=this._createNewBuffer(a,{byteLength:f,usage:c,accessor:d})}}return n},t._setupBuffers=function(e){void 0===e&&(e={});var t=e.sourceBuffers,r=void 0===t?null:t;Object.assign(this.feedbackMap,e.feedbackMap);var n=this._getFeedbackBuffers(e);this._updateBindings({sourceBuffers:r,feedbackBuffers:n})},t._setupTransformFeedback=function(e,t){var r=t.model.program;e.transformFeedback=new d.a(this.gl,{program:r,buffers:e.feedbackBuffers})},t._updateBindings=function(e){if(this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e),this.feedbackMap){var t=this._swapBuffers(this.bindings[this.currentIndex]),r=t.sourceBuffers,n=t.feedbackBuffers,s=this._getNextIndex();this.bindings[s]=this._updateBinding(this.bindings[s],{sourceBuffers:r,feedbackBuffers:n})}},t._updateBinding=function(e,t){return e?(Object.assign(e.sourceBuffers,t.sourceBuffers),Object.assign(e.feedbackBuffers,t.feedbackBuffers),e.transformFeedback&&e.transformFeedback.setBuffers(e.feedbackBuffers),e):{sourceBuffers:Object.assign({},t.sourceBuffers),feedbackBuffers:Object.assign({},t.feedbackBuffers)}},t._swapBuffers=function(e){if(!this.feedbackMap)return null;var t=Object.assign({},e.sourceBuffers),r=Object.assign({},e.feedbackBuffers);for(var n in this.feedbackMap){var s=this.feedbackMap[n];t[n]=e.feedbackBuffers[s],r[s]=e.sourceBuffers[n],Object(l.a)(r[s]instanceof c.a)}return{sourceBuffers:t,feedbackBuffers:r}},t._createNewBuffer=function(e,t){var r=new c.a(this.gl,t);return this.resources[e]&&this.resources[e].delete(),this.resources[e]=r,r},t._getNextIndex=function(){return(this.currentIndex+1)%2},e}(),m=(r("5irr"),r("EpVc")),x=r("2urO"),p=r("mECX"),b=r("kgJN");r("YBKJ"),r("9ZhD"),r("Ll4R");function T(e){var t=100,r=e.match(/[^\s]+/g);if(r.length>=2&&"#version"===r[0]){var n=parseInt(r[1],10);Number.isFinite(n)&&(t=n)}return t}var _,y=r("63Iv"),B={name:"transform",vs:"attribute float transform_elementID;\n\n// returns half of pixel size, used to move the pixel position to center of the pixel.\nvec2 transform_getPixelSizeHalf(vec2 size) {\n  return vec2(1.) / (2. * size);\n}\n\n// returns current elements pixel indeces [x, y],\n// where x ranges in [0 to texSize-1] and y ranges in [0 to texSize-1]\nvec2 transform_getPixelIndices(vec2 texSize, vec2 pixelSizeHalf) {\n  // Add safe offset (half of pixel height) before doing floor\n  float yIndex = floor((transform_elementID / texSize[0]) + pixelSizeHalf[1]);\n  float xIndex = transform_elementID - (yIndex * texSize[0]);\n  return vec2(xIndex, yIndex);\n}\n\n// returns current elementID's texture co-ordianate\nvec2 transform_getTexCoord(vec2 size) {\n  vec2 pixelSizeHalf = transform_getPixelSizeHalf(size);\n  vec2 indices = transform_getPixelIndices(size, pixelSizeHalf);\n  vec2 coord = indices / size + pixelSizeHalf;\n  return coord;\n}\n\n// returns current elementID's position\nvec2 transform_getPos(vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  // Change from [0 1] range to [-1 1]\n  vec2 pos = (texCoord * (2.0, 2.0)) - (1., 1.);\n  return pos;\n}\n\n// returns current elementID's pixel value\nvec4 transform_getInput(sampler2D texSampler, vec2 size) {\n  vec2 texCoord = transform_getTexCoord(size);\n  vec4 textureColor = texture2D(texSampler, texCoord);\n  return textureColor;\n}\n",fs:null};function I(e){var t=e.vs,r=e.sourceTextureMap,n=e.targetTextureVarying,s=e.targetTexture,a=Object.keys(r).length,o=null,f={},c=t,d={};if(a>0||n){var h=c.split("\n"),g=h.slice();if(h.forEach((function(e,t,s){if(a>0){var c=function(e,t){var r={},n=function(e){return u(e,["attribute","in"])}(e);if(!n)return null;var s=n.type,a=n.name;if(a&&t[a]){var o="// "+e+" => Replaced by Transform with a sampler",f=function(e){var t="transform_uSampler_"+e,r="transform_uSize_"+e;return{samplerName:t,sizeName:r,uniformDeclerations:"  uniform sampler2D "+t+";\n  uniform vec2 "+r+";"}}(a),c=f.samplerName,d=f.sizeName,l=f.uniformDeclerations,h=function(e){switch(e){case"float":return"x";case"vec2":return"xy";case"vec3":return"xyz";case"vec4":return"xyzw";default:return Object(i.a)(!1),null}}(s),g="  "+s+" "+a+" = transform_getInput("+c+", "+d+")."+h+";\n";return r[c]=a,{updatedLine:o,inject:{"vs:#decl":l,"vs:#main-start":g},samplerTextureMap:r}}return null}(e,r);if(c){var l=c.updatedLine,h=c.inject;g[t]=l,d=Object(y.b)([d,h]),Object.assign(f,c.samplerTextureMap),a--}}n&&!o&&(o=function(e,t){var r=u(e,["varying","out"]);if(!r)return null;return r.name===t?r.type:null}(e,n))})),n){Object(l.a)(s);var v="transform_uSize_"+n,m={"vs:#decl":"uniform vec2 "+v+";\n","vs:#main-start":"     vec2 transform_position = transform_getPos("+v+");\n     gl_Position = vec4(transform_position, 0, 1.);\n"};d=Object(y.b)([d,m])}c=g.join("\n")}return{vs:c,targetTextureType:o,inject:d,samplerTextureMap:f}}var O=((_={})[s.a.TEXTURE_MIN_FILTER]=s.a.NEAREST,_[s.a.TEXTURE_MAG_FILTER]=s.a.NEAREST,_[s.a.TEXTURE_WRAP_S]=s.a.CLAMP_TO_EDGE,_[s.a.TEXTURE_WRAP_T]=s.a.CLAMP_TO_EDGE,_),w=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.currentIndex=0,this._swapTexture=null,this.targetTextureVarying=null,this.targetTextureType=null,this.samplerTextureMap=null,this.bindings=[],this.resources={},this._initialize(t),Object.seal(this)}var t=e.prototype;return t.updateModelProps=function(e){void 0===e&&(e={});var t=this._processVertexShader(e);return Object.assign({},e,t)},t.getDrawOptions=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],r=t.sourceBuffers,n=t.sourceTextures,s=t.framebuffer,i=t.targetTexture,a=Object.assign({},r,e.attributes),u=Object.assign({},e.uniforms),o=Object.assign({},e.parameters),f=e.discard;if(this.hasSourceTextures||this.hasTargetTexture){for(var c in a.transform_elementID=this.elementIDBuffer,this.samplerTextureMap){var d=this.samplerTextureMap[c];u[c]=n[d]}this._setSourceTextureParameters();var l=function(e){var t,r,n=e.sourceTextureMap,s=e.targetTextureVarying,i=e.targetTexture,a={};for(var u in s&&(t=i.width,r=i.height,a["transform_uSize_"+s]=[t,r]),n){var o=n[u];t=o.width,r=o.height,a["transform_uSize_"+u]=[t,r]}return a}({sourceTextureMap:n,targetTextureVarying:this.targetTextureVarying,targetTexture:i});Object.assign(u,l)}return this.hasTargetTexture&&(f=!1,o.viewport=[0,0,s.width,s.height]),{attributes:a,framebuffer:s,uniforms:u,discard:f,parameters:o}},t.swap=function(){return!!this._swapTexture&&(this.currentIndex=this._getNextIndex(),!0)},t.update=function(e){void 0===e&&(e={}),this._setupTextures(e)},t.getTargetTexture=function(){return this.bindings[this.currentIndex].targetTexture},t.getData=function(e){var t=(void 0===e?{}:e).packed,r=void 0!==t&&t,n=this.bindings[this.currentIndex].framebuffer,s=Object(m.b)(n);if(!r)return s;for(var a=s.constructor,u=function(e){switch(e){case"float":return 1;case"vec2":return 2;case"vec3":return 3;case"vec4":return 4;default:return Object(i.a)(!1),null}}(this.targetTextureType),o=new a(s.length*u/4),f=0,c=0;c<s.length;c+=4)for(var d=0;d<u;d++)o[f++]=s[c+d];return o},t.getFramebuffer=function(){return this.bindings[this.currentIndex].framebuffer},t.delete=function(){this.ownTexture&&this.ownTexture.delete(),this.elementIDBuffer&&this.elementIDBuffer.delete()},t._initialize=function(e){void 0===e&&(e={});var t=e,r=t._targetTextureVarying,n=t._swapTexture;this._swapTexture=n,this.targetTextureVarying=r,this.hasTargetTexture=r,this._setupTextures(e)},t._createTargetTexture=function(e){var t=e.sourceTextures,r=e.textureOrReference;if(r instanceof x.a)return r;var n=t[r];return n?(this._targetRefTexName=r,this._createNewTexture(n)):null},t._setupTextures=function(e){void 0===e&&(e={});var t=e,r=t.sourceBuffers,n=t._sourceTextures,s=void 0===n?{}:n,i=t._targetTexture,a=this._createTargetTexture({sourceTextures:s,textureOrReference:i});this.hasSourceTextures=this.hasSourceTextures||s&&Object.keys(s).length>0,this._updateBindings({sourceBuffers:r,sourceTextures:s,targetTexture:a}),"elementCount"in e&&this._updateElementIDBuffer(e.elementCount)},t._updateElementIDBuffer=function(e){if(!("number"!=typeof e||this.elementCount>=e)){var t=new Float32Array(e);t.forEach((function(e,t,r){r[t]=t})),this.elementIDBuffer?this.elementIDBuffer.setData({data:t}):this.elementIDBuffer=new c.a(this.gl,{data:t,accessor:{size:1}}),this.elementCount=e}},t._updateBindings=function(e){if(this.bindings[this.currentIndex]=this._updateBinding(this.bindings[this.currentIndex],e),this._swapTexture){var t=this._swapTextures(this.bindings[this.currentIndex]),r=t.sourceTextures,n=t.targetTexture,s=this._getNextIndex();this.bindings[s]=this._updateBinding(this.bindings[s],{sourceTextures:r,targetTexture:n})}},t._updateBinding=function(e,t){var r=t.sourceBuffers,n=t.sourceTextures,i=t.targetTexture;if(e||(e={sourceBuffers:{},sourceTextures:{},targetTexture:null}),Object.assign(e.sourceTextures,n),Object.assign(e.sourceBuffers,r),i){e.targetTexture=i;var a,u,o=i.width,f=i.height,c=e.framebuffer;if(c)c.update({attachments:(a={},a[s.a.COLOR_ATTACHMENT0]=i,a),resizeAttachments:!1}),c.resize({width:o,height:f});else e.framebuffer=new p.a(this.gl,{id:(this.id||"transform")+"-framebuffer",width:o,height:f,attachments:(u={},u[s.a.COLOR_ATTACHMENT0]=i,u)})}return e},t._setSourceTextureParameters=function(){var e=this.currentIndex,t=this.bindings[e].sourceTextures;for(var r in t)t[r].setParameters(O)},t._swapTextures=function(e){if(!this._swapTexture)return null;var t=Object.assign({},e.sourceTextures);return t[this._swapTexture]=e.targetTexture,{sourceTextures:t,targetTexture:e.sourceTextures[this._swapTexture]}},t._createNewTexture=function(e){var t,r,n=Object(b.a)(e,{parameters:(t={},t[s.a.TEXTURE_MIN_FILTER]=s.a.NEAREST,t[s.a.TEXTURE_MAG_FILTER]=s.a.NEAREST,t[s.a.TEXTURE_WRAP_S]=s.a.CLAMP_TO_EDGE,t[s.a.TEXTURE_WRAP_T]=s.a.CLAMP_TO_EDGE,t),pixelStore:(r={},r[s.a.UNPACK_FLIP_Y_WEBGL]=!1,r)});return this.ownTexture&&this.ownTexture.delete(),this.ownTexture=n,n},t._getNextIndex=function(){return(this.currentIndex+1)%2},t._processVertexShader=function(e){void 0===e&&(e={});var t=this.bindings[this.currentIndex],r=t.sourceTextures,n=t.targetTexture,s=I({vs:e.vs,sourceTextureMap:r,targetTextureVarying:this.targetTextureVarying,targetTexture:n}),i=s.vs,a=s.uniforms,u=s.targetTextureType,f=s.inject,c=s.samplerTextureMap,d=Object(y.b)([e.inject||{},f]);return this.targetTextureType=u,this.samplerTextureMap=c,{vs:i,fs:e._fs||o({version:T(i),input:this.targetTextureVarying,inputType:u,output:"transform_output"}),modules:this.hasSourceTextures||this.targetTextureVarying?[B].concat(e.modules||[]):e.modules,uniforms:a,inject:d}},e}(),j=r("BunF"),E=r("UD/Y");function S(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=function(){function e(e,t){void 0===t&&(t={}),this.gl=e,this.model=null,this.elementCount=0,this.bufferTransform=null,this.textureTransform=null,this.elementIDBuffer=null,this._initialize(t),Object.seal(this)}e.isSupported=function(e){return Object(f.e)(e)};var t=e.prototype;return t.delete=function(){var e=this.model,t=this.bufferTransform,r=this.textureTransform;e&&e.delete(),t&&t.delete(),r&&r.delete()},t.run=function(e){void 0===e&&(e={});var t=e.clearRenderTarget,r=void 0===t||t,n=this._updateDrawOptions(e);r&&n.framebuffer&&n.framebuffer.clear({color:!0}),this.model.transform(n)},t.swap=function(){for(var e,t=!1,r=S([this.bufferTransform,this.textureTransform].filter(Boolean));!(e=r()).done;){var n=e.value;t=t||n.swap()}Object(l.a)(t,"Nothing to swap")},t.getBuffer=function(e){return void 0===e&&(e=null),this.bufferTransform&&this.bufferTransform.getBuffer(e)},t.getData=function(e){void 0===e&&(e={});for(var t,r=S([this.bufferTransform,this.textureTransform].filter(Boolean));!(t=r()).done;){var n=t.value.getData(e);if(n)return n}return null},t.getFramebuffer=function(){return this.textureTransform&&this.textureTransform.getFramebuffer()},t.update=function(e){void 0===e&&(e={}),"elementCount"in e&&this.model.setVertexCount(e.elementCount);for(var t,r=S([this.bufferTransform,this.textureTransform].filter(Boolean));!(t=r()).done;){t.value.update(e)}},t._initialize=function(e){void 0===e&&(e={});var t=this.gl;this._buildResourceTransforms(t,e),e=this._updateModelProps(e),this.model=new E.a(t,Object.assign({},e,{fs:e.fs||o({version:T(e.vs)}),id:e.id||"transform-model",drawMode:e.drawMode||s.a.POINTS,vertexCount:e.elementCount})),this.bufferTransform&&this.bufferTransform.setupResources({model:this.model})},t._updateModelProps=function(e){for(var t,r=Object.assign({},e),n=S([this.bufferTransform,this.textureTransform].filter(Boolean));!(t=n()).done;){r=t.value.updateModelProps(r)}return r},t._buildResourceTransforms=function(e,t){(function(e){if(!Object(j.a)(e.feedbackBuffers)||!Object(j.a)(e.feedbackMap)||e.varyings&&e.varyings.length>0)return!0;return!1})(t)&&(this.bufferTransform=new v(e,t)),function(e){if(!Object(j.a)(e._sourceTextures)||e._targetTexture||e._targetTextureVarying)return!0;return!1}(t)&&(this.textureTransform=new w(e,t)),Object(l.a)(this.bufferTransform||this.textureTransform,"must provide source/feedback buffers or source/target textures")},t._updateDrawOptions=function(e){for(var t,r=Object.assign({},e),n=S([this.bufferTransform,this.textureTransform].filter(Boolean));!(t=n()).done;){var s=t.value;r=Object.assign(r,s.getDrawOptions(r))}return r},e}()}}]);