---
titleNuestro Trabajo</h1></div>
    </section>
    <section id="portfolio-page">
        <div class="container">
            <div class="portfolio-filters" data-aos="fade-up">
                <button class="filter-btn active" data-filter="all">Todo</button>
                <button class="filter-btn" data-filter="bodas">Bodas</button>
                <button class="filter-btn" data-filter="quince">Quince Años</button>
                <button class="filter-btn" data-filter="eventos">Eventos</button>
                <button class="filter-btn" data-filter="producto">Producto</button>
                <button class="filter-btn" data-filter="retrato">Retrato</button>
            </div>
            <div class="portfolio-gallery">
                {# Este es un bucle que recorre todas las entradas que crees en el CMS #}
                {% for item in collections.portafolio %}
                <div class="portfolio-item" data-category="{{ item.data.category }}" data-aos="zoom-in">
                    <img src="{{ item.data.image }}" alt="{{ item.data.title }}">
                </div>
                {% endfor %}
            </div>
        </div>
    </section>
</main>
<script>
    // El script del lightbox y los filtros no cambia.
</script>
