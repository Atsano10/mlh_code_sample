function buildFilterBar() {
    const bar = document.getElementById("filterBar");
    const allTags = new Set();
    projects.forEach(p => p.tags.forEach(t => allTags.add(t.name)));

    allTags.forEach(tag => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.dataset.filter = tag;
        btn.textContent = tag;
        bar.appendChild(btn);
    });

    bar.addEventListener("click", e => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        const filter = btn.dataset.filter;

        bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        applyFilter(filter);
    });
}
