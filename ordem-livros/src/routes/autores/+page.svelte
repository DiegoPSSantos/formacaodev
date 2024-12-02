<script>

  import ItemAutor from "../../components/autor/ItemAutor.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
  import { autores } from "../../constants/autores";

</script>
<div class="flex flex-col gap-10">
    <Titulo principal="Autores" secundario="Conheças os autores das histórias que você ama!" />

<div class="grid grid-cols-3 gap-5">
    {#each autores as autor}
        <ItemAutor {autor} />
    {/each}
    </div>
</div>