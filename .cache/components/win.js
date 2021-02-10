import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import {useEffect} from '/@npm/preact/hooks';

export function Win({onRestart,time}){

    useEffect(()=>{
        document.getElementById('restart-button').focus();
    },[]);

    return $$html`<div>
        <h2>You got through it in ${time} seconds!</h2> 
        <h2>You're a phonetic expert.</h2>
        <button id="restart-button" className="restart-button" onClick=${onRestart}>Play again?</button>
    </div>`
}

import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
