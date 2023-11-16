<script lang="ts">
    import FolderTree from "./components/FolderTree.svelte";
    import ObjectInfo from "./components/ObjectInfo.svelte";
    import ObjectTable from "./components/ObjectTable.svelte";
    import type { DriveFile, UserData } from "./utils/types";

    const selectItem = new Set<DriveFile>();
    let currentUser: UserData | null = null;
    let folders = [];
    let files = [];
</script>

<main>
    <FolderTree />
    <ObjectTable />
    <ObjectInfo />
</main>

<style>
</style>
