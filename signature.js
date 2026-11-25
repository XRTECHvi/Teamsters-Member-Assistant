// Private, per-grievance signature. No network calls or reusable signature cache.
function setupSignaturePad(canvas){
 const ctx=canvas.getContext('2d');let strokes=[],active=null,pointer=null,total=0;
 function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='#142b55';ctx.fillStyle='#142b55';ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';for(let stroke of strokes){if(!stroke.length)continue;ctx.beginPath();ctx.moveTo(stroke[0][0]*canvas.width,stroke[0][1]*canvas.height);for(let p of stroke.slice(1))ctx.lineTo(p[0]*canvas.width,p[1]*canvas.height);if(stroke.length===1){ctx.arc(stroke[0][0]*canvas.width,stroke[0][1]*canvas.height,2,0,Math.PI*2);ctx.fill()}else ctx.stroke()}}
 function point(e){let r=canvas.getBoundingClientRect();return [Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))]}
 function append(e){if(total>=8000)return;let p=point(e),last=active[active.length-1];if(last&&Math.hypot((p[0]-last[0])*1000,(p[1]-last[1])*340)<1)return;active.push(p);total++}
 canvas.addEventListener('pointerdown',e=>{if(pointer!==null||e.button!==0||total>=8000)return;e.preventDefault();pointer=e.pointerId;active=[];strokes.push(active);append(e);canvas.setPointerCapture(pointer);draw()});
 canvas.addEventListener('pointermove',e=>{if(e.pointerId!==pointer||!active)return;e.preventDefault();for(let p of e.getCoalescedEvents?.()||[e])append(p);append(e);draw()});
 function end(e){if(e.pointerId!==pointer)return;if(e.type==='pointerup'&&active)append(e);pointer=null;active=null;draw()}
 for(let event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,end);
 function clear(){strokes=[];active=null;pointer=null;total=0;draw()}
 function undo(){if(active)return;let s=strokes.pop();if(s)total-=s.length;draw()}
 function hasInk(){return strokes.some(s=>s.some((p,i)=>i>0&&Math.hypot((p[0]-s[0][0])*1000,(p[1]-s[0][1])*340)>8))}
 return {clear,undo,hasInk,copy:()=>structuredClone(strokes.filter(s=>s.length))};
}
