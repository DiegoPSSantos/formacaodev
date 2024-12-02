<script>
  import { IconBook2, IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconFriends, IconHome2, IconRss, IconSquare1, IconSquare2, IconSquare3, IconUsers } from "@tabler/icons-svelte";


  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";

</script>
<aside class="flex flex-col
    self-start w-72 gap-10
    border border-zinc-800
    p-5 rounded-md">
  <Menu titulo="Navegação">
    <MenuItem texto="Início" href="/">
      <IconHome2 size={20} />
    </MenuItem>
    <MenuItem texto="Personagens" href="/">
      <IconFriends size={20} />
    </MenuItem>
    <MenuItem texto="Autores" href="/autores">
      <IconUsers size={20} />
    </MenuItem>
    <MenuItem texto="Séries" href="/series">
      <IconBooks size={20} />
    </MenuItem>
  </Menu>
  <Menu titulo="Principais Autores">
    <MenuItem texto="J.K. Rowling" href="/autores/j-k-rowling">
      <IconSquare1 size={20} />
    </MenuItem>  
    <MenuItem texto="J.R.R. Tolkien" href="/autores/j-r-r-tolkien">
      <IconSquare2 size={20} />
    </MenuItem>
    <MenuItem texto="George R.R. Martin" href="/autores/george-martin">
      <IconSquare3 size={20} />
    </MenuItem>
  </Menu>
  <Menu titulo="Outras Categorias">
    <MenuItem texto="Últimas Notícias" href="/">
      <IconRss size={20} />
    </MenuItem>
    <MenuItem texto="Séries Populares" href="/">
      <IconBooks size={20} />
    </MenuItem>
    <MenuItem texto="Facebook" href="/">
      <IconBrandFacebook size={20} />
    </MenuItem>
    <MenuItem texto="Instagram" href="/">
      <IconBrandInstagram size={20} />
    </MenuItem>
    <MenuItem texto="Youtube" href="/">
      <IconBrandYoutube size={20} />
    </MenuItem>
  </Menu>
</aside>
