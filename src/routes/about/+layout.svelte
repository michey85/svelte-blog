<script lang="ts">
  let {children} = $props();
</script>

<div>
  <h1>About us</h1>
  <ul>
    <li>
      <a href="/about/contacts">Contacts</a>
    </li>
    <li>
      <a href="/about/team">Team</a>
    </li>
  </ul>
  {@render children()}
</div>