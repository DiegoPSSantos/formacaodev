<script>

  import ItemSerie from "../../components/serie/ItemSerie.svelte";
 import Titulo from "../../components/shared/Titulo.svelte";
  import series from "../../constants/series";
  
  </script>
  <div class="flex flex-col gap-10">
      <Titulo principal="Séries" secundario="Conheças mais sobre as séries que você ama!" />
  
  <div class="flex flex-col gap-5">
      {#each series as serie}
          <ItemSerie {serie} />
      {/each}
      </div>
  </div>