<script lang="ts">
  import { Page, StackLayout, Label, Button } from '@nativescript/core';
</script>

<page>
  <actionBar title="SwiftPark" />
  <stackLayout class="p-20">
    <label 
      text="Trouvez votre place de parking" 
      class="h1 text-center" 
      textWrap="true"
    />
    
    <label 
      text="SwiftPark connecte les conducteurs qui libèrent une place avec ceux qui en cherchent une." 
      class="body text-center" 
      textWrap="true"
    />
    
    <button 
      text="Je quitte une place" 
      class="-primary m-t-20" 
    />
    
    <button 
      text="Je cherche une place" 
      class="-outline m-t-10" 
    />
  </stackLayout>
</page>

<style>
  .h1 {
    font-size: 24;
    font-weight: bold;
    margin-bottom: 20;
  }
  
  .body {
    font-size: 16;
    color: #666;
    margin-bottom: 30;
  }
</style>