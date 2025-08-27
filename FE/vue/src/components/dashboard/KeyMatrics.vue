<template>
    <section>
        <h2>Key Metrics</h2>
        <div class="grid">
            <article>
                <p>Workflow Completion Rate</p>
                <div class="grid">
                    <h1>85%</h1>
                    <span class="secondary">+5%</span>
                </div>
                <p>Last 30 Days</p>
                <div class="chart-container">
                    <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                            stroke="var(--pico-primary)" stroke-linecap="round" stroke-width="3">
                        </path>
                    </svg>
                </div>
            </article>
            <article>
                <p>Task Completion Rate</p>
                <div class="grid">
                    <h1>72%</h1>
                    <span class="secondary">-2%</span>
                </div>
                <p>Last 30 Days</p>
                <div class="bar-chart chart-container grid">
                    <div style="height: 20%; background-color: var(--pico-border-color);" class="bar"></div>
                    <div style="height: 50%; background-color: var(--pico-border-color);" class="bar"></div>
                    <div style="height: 90%; background-color: var(--pico-border-color);" class="bar"></div>
                    <div style="height: 10%; background-color: var(--pico-border-color);" class="bar"></div>
                    <div style="height: 70%; background-color: var(--pico-border-color);" class="bar"></div>
                    <div style="height: 72%; background-color: var(--pico-primary);" class="bar">
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>