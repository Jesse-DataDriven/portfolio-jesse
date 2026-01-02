<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Profissional - Jessé Oliveira de Castro</title>
    <!-- Carregando Tailwind CSS para o estilo moderno -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Configuração de fontes e ícones -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .icon { display: inline-block; }
        
        /* Estilização suave da barra de rolagem para os blocos internos */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(30, 41, 59, 0.5);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(59, 130, 246, 0.3);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.5);
        }
        
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500 selection:text-white">

    <div id="root"></div>

    <script>
        // Variável de controle de idioma
        let currentLang = 'pt'; 
        let selectedProjectId = null; 

        // --- DADOS ESTÁTICOS ---
        const staticSkills = [
            "SQL", "PowerBI", "M/DAX", "Figma", "Canvas", "Azure DEVOPS", "Azure Data Factory", 
            "Azure Analysis Service", "SYNAPSE", "DW", "Data Bricks", "PowerApps", "PySpark", 
            "MetaBase", "Confluence", "Discovery de negócios", "Discovery de dados", 
            "Zendesk", "SalesForce", "Twillio", "MIRO", "Data Driven", "Ciência de dado", 
            "Minitab", "Storytelling", "Office Avançado", "Gestão de projetos", 
            "Análise de mercado", "LSS", "Aplicação DMAIC", "Scrum"
        ];
        
        const staticMetrics = {
            estrategicas: ["CAC", "LTV", "CHURN", "Health Score"],
            experiencia_cliente: ["NPS", "CSAT", "CES", "RA", "TMA", "TME", "TMT"],
            experiencia_usuario: ["Taxa de erro", "Taxa de clique", "Profundidade de rolagem"],
            sucesso_cliente: ["Qualidade", "Auditoria", "Retrabalho", "FCR", "Conversão", "Ticket médio"],
            planejamento_estrategico: ["Abandono", "NS", "Taxa ocupação", "ABS", "TO", "ROI", "Fore Cast"],
            logisticas: ["ONTIME", "INFULL"]
        };

        const staticAIAutomation = ["Bardeen", "Make", "N8N", "Zapier", "BuildShip"];
        const staticAITools = ["ChatGPT", "Copilot", "Gemini", "Claude", "Perplexity", "DeepSeek", "Grok", "Qwen", "Mapify"];
        const staticAIToolsExtra = ["HeyGen", "RunWay", "Leonardo IA", "Revid", "COPILOT", "MidJourney", "Invideo", "Flux", "Lovable", "Whisk", "ElevenLabs", "GAMMA", "QuillBot", "LTX", "OpenArt"];

        const staticProjectData = [
            { id: 1, tools: ["Power BI", "Python", "Scikit-Learn"], image: "https://i.postimg.cc/qBczymDX/nps_predicao.png", icon: 'trending-up' },
            { id: 2, tools: ["Power BI", "R", "SQL"], image: "https://i.postimg.cc/MKWXDyhH/predicao_precos.png", icon: 'bar-chart-3' },
            { id: 3, tools: ["Power BI", "DAX Avançado"], image: "https://i.postimg.cc/NMmLNbs0/causas_raizes_cs.png", icon: 'users' },
            { id: 4, tools: ["Power BI", "Jira API"], image: "https://i.postimg.cc/vTvTyBxS/bi_pm_entregas.png", icon: 'package' },
            { id: 5, tools: ["Power BI", "Serviços Cognitivos Azure"], image: "https://i.postimg.cc/Y0x079mr/nlp_insights.png", icon: 'brain-circuit' },
            { id: 6, tools: ["SQL", "Python (Pandas)", "Power BI"], image: "https://i.postimg.cc/Kc7RB9sb/predicao_produtividade.png", icon: 'target' }
        ];

        const staticConsultingCaseData = [
            { image: "https://i.postimg.cc/Bb3bRDt9/DMAIC.png", icon: 'sigma', color: 'text-green-400' },
            { image: "https://i.postimg.cc/HLfV4Fgp/Fluxograma_Venda_incremental.png", icon: 'map', color: 'text-purple-400' },
            { image: "https://i.postimg.cc/sxJxzXZy/Meta_Smart.png", icon: 'award', color: 'text-yellow-400' },
            { image: "https://i.postimg.cc/J41tqb9G/Regressao_Múltipla.png", icon: 'cpu', color: 'text-blue-400' },
        ];
        
        const I18N = {
            pt: {
                personal_name: "Jessé Oliveira de Castro",
                tagline: "Gerente de Produto e dados | Liderança em CX, CS | Qualidade, monitoria e Treinamento | Inteligência Relatorial | BI | SQL | Data Science",
                title_pre: "Transformando dados em ",
                title_highlight: "decisões estratégicas.",
                description: "Especialista em modelagens preditivas, integrações, gestão de produto e experiência do cliente.",
                skills_title: "Skills e Interesses",
                skills_subtitle: "Ferramentas com proficiência técnica, métricas de profundo conhecimento e IA.",
                pillar_1_title: "Ferramentas Técnicas (Proficiência)",
                pillar_2_title: "Principais Métricas (KPIs)",
                pillar_3_title: "Inteligência Artificial (IA)",
                metrics_estrategicas_title: "Estratégicas",
                metrics_experiencia_cliente_title: "Experiência do Cliente",
                metrics_experiencia_usuario_title: "Experiência do Usuário",
                metrics_sucesso_cliente_title: "Sucesso do Cliente",
                metrics_planejamento_estrategico_title: "Planejamento Estratégico",
                metrics_logisticas_title: "Logísticas",
                ia_automation_title: "Automação (iPaaS)",
                ia_tooling_title: "IA como ferramenta",
                ia_generative_title: "IAs Generativas",
                about_title: "Sobre Mim e Expertise",
                about_text_1: "Gerente de Produto (PM) e Especialista em CX/CS com sólida trajetória em liderança de Squads e transformação digital em grandes players (<span class='font-semibold text-blue-300'>Ambev, AVIVA, Concentrix</span>). Expert na integração de <span class='text-blue-200 font-semibold'>Ciência de Dados, Inteligência Artificial e Business Intelligence</span> para alavancagem de resultados.",
                about_text_2: "Histórico comprovado de aplicação de proficiência técnica em <span class='font-semibold text-blue-300'>SQL, Power BI (DAX) e Metodologias Ágeis (Scrum/Six Sigma)</span> diretamente à eficiência de negócio e rentabilidade.",
                certifications_title: "Formação e Certificações:",
                certifications_text: "Pós graduação em Gestão estratégica de negócios, LSS Green Belt, certificado em linguagem SQL, PowerBi Avançado, DAX/M, Design Low-Code e IA.",
                results_title: "Resultados Comprovados",
                metric_1_label: "em Saving Operacional",
                metric_2_label: "Aumento no NPS",
                metric_3_label: "Reputação",
                metric_3_sublabel: "Recuperação Corporativa",
                cta_title: "Conheça minha jornada profissional.",
                cta_subtitle: "Baixe meu currículo e mergulhe no storytelling da minha carreira para conhecer detalhes dos resultados alcançados.",
                cta_button_1: "Ver Currículo Completo",
                cta_button_2: "Ver Story Telling da Carreira",
                ia_groups_title: "Grupos IA de aprendizagem compartilhada",
                ia_groups_subtitle: "Esses 2 canais são automações que criei usando inteligência artificial. A ideia é receber todo dia notícias atualizadas sobre esses dois assuntos. Se quiser participar, fique a vontade",
                ia_group_1_title: "Principais notícias de IA, 3x por dia",
                ia_group_1_link: "https://t.me/noticiasiamake",
                ia_group_2_title: "Principais notícias de Investimentos 1x por dia",
                ia_group_2_link: "https://t.me/NoticiasRendaFixa",
                projects_title: "Conheça alguns Projetos em Destaque",
                projects_subtitle: "Soluções de Business intelligence, Projetos Six Sigma, Estatística e Data Science",
                consulting_title: "Consultoria e Cases de Sucesso",
                consulting_subtitle: "Minha proposta é simplificar conceitos consultivos, converter continuamente oportunidades de valor em KPIs claros e mensuráveis, utilizando excelência processual e inteligência analítica para nortear as decisões estratégicas e garantir a sustentabilidade e escalabilidade do negócio.",
                modal_tech_details_title: "Detalhes Técnicos",
                modal_stack_title: "Stack Utilizada",
                footer_text: "Jessé Oliveira de Castro - Data Analyst & PM",
                projects: [
                    { id: 1, category: "Data Science & CX", title: "Algoritmo de Predição de NPS", description: "Modelo preditivo desenvolvido para antecipar a nota de NPS dos clientes antes da pesquisa oficial.", details: "Utilizei regressão logística para identificar padrões de comportamento do usuário que correlacionam com notas baixas. O dashboard permite filtrar por risco de churn." },
                    { id: 2, category: "Pricing & Machine Learning", title: "Algoritmo de Predição de Preços", description: "Solução para otimização de precificação dinâmica baseada em elasticidade de demanda e concorrência.", details: "Análise histórica de 5 anos de vendas para sugerir o preço ótimo. O Power BI consome a saída do modelo e apresenta cenários de receita vs. volume." },
                    { id: 3, category: "Customer Success", title: "BI de Causas Raízes (CS)", description: "Painel analítico para identificação profunda dos motivos de contato e insatisfação.", details: "Implementação de Pareto e visualizações de árvore de decomposição para chegar na causa raiz dos tickets de suporte em 3 cliques." },
                    { id: 4, category: "Product Management", title: "BI de Entregas como PM", description: "Visão executiva e tática do roadmap, velocity do time e entregas de features versus valor.", details: "Conexão direta com API do Jira. Monitoramento de Lead Time, Cycle Time e Burndown charts customizados para stakeholders não técnicos." },
                    { id: 5, category: "NLP & IA", title: "Insights de PNL - CX", description: "Análise de sentimentos em comentários de NPS e menções públicas utilizando Processamento de Linguagem Natural.", details: "Nuvens de palavras dinâmicas e classificação automática de tópicos (elogio, reclamação, sugestão) extraídos de textos não estruturados." },
                    { id: 6, category: "Gestão de Processos & Produtividade", title: "Algoritmo de Otimização de Performance (SLA)", description: "Sistema para definir e monitorar a produtividade ideal da equipe, prevenindo desvios que geram multas contratuais.", details: "Desenvolvimento de um índice de performance em tempo real (RPI) que compara a produtividade atual com os benchmarks contratuais. Utiliza janelas deslizantes (rolling window) no Python para alertar sobre a probabilidade de quebra de SLA com 7 dias de antecedência, permitindo intervenção tática." }
                ],
                consulting: [
                    { title: "Six Sigma e DMAIC para KPIs Críticos", description: "Projetos DMAIC de melhoria contínua com ganho comprovado em importantes KPIs: ABS, Qualidade, NPS, CSAT, TMO.", details: "Ações de recuperação de importantes KPI's operacionais. ABS saindo de 11% para 5,30%" },
                    { title: "Mapeamento e Redesenho da Jornada", description: "Mapeamento AS IS + Melhoria da Jornada do cliente, focando em redução de atritos e aumento da satisfação (CX).", details: "Melhoria na jornada gerando incremental de vendas, cross selling e aumento no faturamento." },
                    { title: "Definição Científica de Metas e KPIs", description: "Aplicação de métodos científicos e estatísticos para definição de KPIs estratégicos e estabelecimento de Metas SMART e cascateamento.", details: "Mais de 20 definições científicas de Metas SMART e cascateamento estratégico." },
                    { title: "Ciência de Dados, uso de IA e Regressões Preditivas", description: "Ciência de dados, regressões simples e múltiplas amparando decisões em importantes KPI's como NPS, Volume de vendas, Produtividade por agente.", details: "Modelagens para mapeamento de Health Score e antecipação de risco de churn e notas baixas (NPS)." },
                ]
            },
            en: {
                personal_name: "Jesse Oliveira de Castro",
                tagline: "Product & Data Manager | CX, CS Leadership | Quality, Monitoring & Training | Relational Intelligence | BI | SQL | Data Science",
                title_pre: "Transforming data into ",
                title_highlight: "strategic decisions.",
                description: "Specialist in predictive modeling, integrations, product management, and customer experience.",
                skills_title: "Skills and Interests",
                skills_subtitle: "Tools with technical proficiency, deep knowledge metrics, and AI.",
                pillar_1_title: "Technical Tools (Proficiency)",
                pillar_2_title: "Key Metrics (KPIs)",
                pillar_3_title: "Artificial Intelligence (AI)",
                metrics_estrategicas_title: "Strategic",
                metrics_experiencia_cliente_title: "Customer Experience",
                metrics_experiencia_usuario_title: "User Experience",
                metrics_sucesso_cliente_title: "Customer Success",
                metrics_planejamento_estrategico_title: "Strategic Planning",
                metrics_logisticas_title: "Logistics",
                ia_automation_title: "Automation (iPaaS)",
                ia_tooling_title: "AI as a tool",
                ia_generative_title: "Generative AI",
                about_title: "About Me & Expertise",
                about_text_1: "Product Manager (PM) and CX/CS Specialist with a solid trajectory in leading Squads and digital transformation in major players (<span class='font-semibold text-blue-300'>Ambev, AVIVA, Concentrix</span>). Expert in integrating <span class='text-blue-200 font-semibold'>Data Science, Artificial Intelligence, and Business Intelligence</span> to leverage results.",
                about_text_2: "Proven track record of applying technical proficiency in <span class='font-semibold text-blue-300'>SQL, Power BI (DAX), and Agile Methodologies (Scrum/Six Sigma)</span> directly to business efficiency and profitability.",
                certifications_title: "Education and Certifications:",
                certifications_text: "Post-graduate degree in Strategic Business Management, LSS Green Belt, certified in SQL language, Advanced PowerBI, DAX/M, Low-Code Design, and AI.",
                results_title: "Proven Results",
                metric_1_label: "in Operational Saving",
                metric_2_label: "Increase in NPS",
                metric_3_label: "Reputation",
                metric_3_sublabel: "Corporate Recovery",
                cta_title: "Explore my professional journey.",
                cta_subtitle: "Download my resume and delve into my career storytelling to learn details of the results achieved.",
                cta_button_1: "View Full Resume",
                cta_button_2: "View Career Storytelling",
                ia_groups_title: "Shared AI Learning Groups",
                ia_groups_subtitle: "These 2 channels are automations I created using artificial intelligence. The idea is to receive daily updated news on these two subjects. Feel free to join if you wish.",
                ia_group_1_title: "Top AI News, 3x a day",
                ia_group_1_link: "https://t.me/noticiasiamake",
                ia_group_2_title: "Top Investment News, 1x a day",
                ia_group_2_link: "https://t.me/NoticiasRendaFixa",
                projects_title: "Featured Projects Showcase",
                projects_subtitle: "Business Intelligence Solutions, Six Sigma Projects, Statistics, and Data Science",
                consulting_title: "Consulting and Success Cases",
                consulting_subtitle: "My proposal is to simplify consulting concepts, continuously convert value opportunities into clear and measurable KPIs, utilizing process excellence and analytical intelligence to guide strategic decisions and ensure business sustainability and scalability.",
                modal_tech_details_title: "Technical Details",
                modal_stack_title: "Stack Used",
                footer_text: "Jessé Oliveira de Castro - Data Analyst & PM",
                projects: [
                    { id: 1, category: "Data Science & CX", title: "NPS Prediction Algorithm", description: "Predictive model developed to anticipate customers' NPS score before the official survey.", details: "Used logistic regression to identify user behavior patterns that correlate with low scores. The dashboard allows filtering by churn risk." },
                    { id: 2, category: "Pricing & Machine Learning", title: "Price Prediction Algorithm", description: "Solution for dynamic pricing optimization based on demand elasticity and competition.", details: "Historical analysis of 5 years of sales to suggest the optimal price. Power BI consumes the model output and presents revenue vs. volume scenarios." },
                    { id: 3, category: "Customer Success", title: "Root Cause BI (CS)", description: "Analytical dashboard for deep identification of contact reasons and dissatisfaction.", details: "Implementation of Pareto and decomposition tree visualizations to reach the root cause of support tickets in 3 clicks." },
                    { id: 4, category: "Product Management", title: "PM Deliverables BI", description: "Executive and tactical view of the roadmap, team velocity, and feature deliveries versus value.", details: "Direct connection with the Jira API. Monitoring of Lead Time, Cycle Time, and custom Burndown charts for non-technical stakeholders." },
                    { id: 5, category: "NLP & AI", title: "NLP Insights - CX", description: "Sentiment analysis in NPS comments and public mentions using Natural Language Processing.", details: "Dynamic word clouds and automatic classification of topics (compliment, complaint, suggestion) extracted from unstructured texts." },
                    { id: 6, category: "Process Management & Productivity", title: "Performance Optimization Algorithm (SLA)", description: "System to define and monitor optimal team productivity, preventing deviations that lead to contractual fines.", details: "Development of a real-time performance index (RPI) that compares current productivity with contractual benchmarks. Uses rolling windows in Python to warn about the probability of SLA breach 7 days in advance, allowing tactical intervention." }
                ],
                consulting: [
                    { title: "Six Sigma and DMAIC for Critical KPIs", description: "DMAIC continuous improvement projects with proven gain in important KPIs: ABS, Quality, NPS, CSAT, TMO.", details: "Recovery actions for important operational KPIs. ABS dropped from 11% to 5.30%" },
                    { title: "Customer Journey Mapping and Redesign", description: "AS IS Mapping + Improvement of the customer journey, focusing on reducing friction and increasing satisfaction (CX).", details: "Improved journey generating incremental sales, cross-selling, and increased revenue." },
                    { title: "Scientific Definition of Goals and KPIs", description: "Application of scientific and statistical methods for strategic KPI definition and establishment of SMART Goals and cascading.", details: "More than 20 scientific definitions of SMART Goals and strategic cascading." },
                    { title: "Data Science, AI Use, and Predictive Regressions", description: "Data science, simple and multiple regressions supporting decisions on important KPI's such as NPS, sales volume, productivity per agent.", details: "Models for mapping Health Score and anticipating churn risk and low scores (NPS)." },
                ]
            }
        };

        function t(key) { return I18N[currentLang][key]; }

        function setLanguage(lang) {
            if (I18N[lang]) {
                currentLang = lang;
                renderPortfolio();
            }
        }
        
        function handleImageError(element) {
            element.src = "https://placehold.co/800x450/1e293b/3b82f6?text=Image+Unavailable";
            element.onerror = null;
        }

        function toggleModal(projectId) {
            selectedProjectId = projectId;
            renderPortfolio();
        }

        function renderSegmentedMetrics() {
            const metricKeys = Object.keys(staticMetrics); 
            return metricKeys.map(key => {
                const titleKey = `metrics_${key}_title`;
                const title = t(titleKey);
                const metrics = staticMetrics[key];
                return `
                    <div class="mb-4">
                        <h4 class="text-sm font-semibold text-slate-400 mb-2 border-b border-slate-700/50 pb-1 flex items-center gap-1">
                            ${title}
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            ${metrics.map(metric => `<span class="px-2 py-1 text-xs font-semibold rounded bg-slate-900 border border-slate-700/50 text-green-400 flex-shrink-0">${metric}</span>`).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function renderPortfolio() {
            const root = document.getElementById('root');
            const localizedProjects = staticProjectData.map((staticItem) => ({
                ...staticItem,
                ...I18N[currentLang].projects.find(p => p.id === staticItem.id)
            }));
            const localizedConsultingCases = staticConsultingCaseData.map((staticItem, index) => ({
                ...staticItem,
                ...I18N[currentLang].consulting[index]
            }));
            const segmentedMetricsHtml = renderSegmentedMetrics();

            const mainContent = `
                <!-- HEADER / HERO SECTION -->
                <header class="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-slate-900">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-60"></div>
                    <div class="max-w-6xl mx-auto px-6 relative">
                        <div class="absolute top-0 right-6 z-40 flex gap-2">
                            <button onclick="setLanguage('pt')" class="px-3 py-1 text-xs font-bold rounded-full transition-all ${currentLang === 'pt' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}">PT</button>
                            <button onclick="setLanguage('en')" class="px-3 py-1 text-xs font-bold rounded-full transition-all ${currentLang === 'en' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}">EN</button>
                        </div>
                        <div class="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
                            <div class="flex-shrink-0 animate-fade-in" style="animation-delay: 0.1s">
                                <div class="relative p-1 rounded-full bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden">
                                    <img src="https://i.postimg.cc/c1tcWNHK/Foto_Jessé_segurando_livro.png" alt="Jessé Oliveira de Castro" class="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full" onerror="handleImageError(this)"/>
                                </div>
                            </div>
                            <div class="flex-grow text-center md:text-left animate-fade-in">
                                <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter">${t('personal_name')}</h1>
                                <p class="text-lg md:text-xl font-medium text-blue-400 mb-8 max-w-4xl leading-snug">${t('tagline')}</p>
                                <div class="mb-10 space-y-4">
                                    <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white">${t('title_pre')}<span class="text-blue-500">${t('title_highlight')}</span></h2>
                                    <p class="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0">${t('description')}</p>
                                </div>
                                <div class="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                                    <a href="mailto:jesse_ombd@hotmail.com" class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2 text-sm md:text-base"><i class="icon" data-lucide="mail" style="width:18px;height:18px;"></i> E-mail</a>
                                    <a href="https://www.linkedin.com/in/jesse-oliveira-de-castro-88421536/" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-semibold border border-slate-700 flex items-center gap-2 text-sm md:text-base"><i class="icon" data-lucide="linkedin" style="width:18px;height:18px;"></i> LinkedIn</a>
                                    <a href="https://github.com/Jesse-DataDriven" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-semibold border border-slate-700 flex items-center gap-2 text-sm md:text-base"><i class="icon" data-lucide="github" style="width:18px;height:18px;"></i> GitHub</a>
                                    <a href="https://t.me/JesseOC1987" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-semibold border border-slate-700 flex items-center gap-2 text-sm md:text-base"><i class="icon" data-lucide="send" style="width:18px;height:18px;"></i> Telegram</a>
                                    <a href="https://wa.me/5511969982743" target="_blank" class="bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm md:text-base"><i class="icon" data-lucide="phone" style="width:18px;height:18px;"></i> WhatsApp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <!-- SEÇÃO SKILLS -->
                <section id="skills" class="py-20 px-6 bg-slate-950/70 border-b border-slate-800">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="text-3xl font-bold text-white mb-2">${t('skills_title')}</h2>
                        <p class="text-slate-400 text-xl mb-12 max-w-4xl">${t('skills_subtitle')}</p>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            <!-- COLUNA 1: FERRAMENTAS TÉCNICAS -->
                            <div class="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 shadow-lg flex flex-col">
                                <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                    <i class="icon" data-lucide="tool" style="width:20px;height:20px;"></i> ${t('pillar_1_title')}
                                </h3>
                                <div class="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar flex flex-wrap gap-2 md:gap-3 content-start">
                                    ${staticSkills.map(skill => `<span class="inline-block px-4 py-2 rounded-full text-sm font-medium bg-slate-900 text-blue-400 border border-slate-700/50 flex-shrink-0 shadow-lg shadow-black/20">${skill}</span>`).join('')}
                                </div>
                            </div>

                            <!-- COLUNA 2: MÉTRICAS -->
                            <div class="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 shadow-lg flex flex-col">
                                <h3 class="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                    <i class="icon" data-lucide="gauge" style="width:20px;height:20px;"></i> ${t('pillar_2_title')}
                                </h3>
                                <div class="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
                                    ${segmentedMetricsHtml}
                                </div>
                            </div>

                            <!-- COLUNA 3: INTELIGÊNCIA ARTIFICIAL -->
                            <div class="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 shadow-lg flex flex-col">
                                <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                    <i class="icon" data-lucide="cpu" style="width:20px;height:20px;"></i> ${t('pillar_3_title')}
                                </h3>
                                <div class="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    <div class="mb-6">
                                        <h4 class="text-sm font-semibold text-slate-400 mb-2 border-b border-slate-700/50 pb-1 flex items-center gap-2">
                                            <i class="icon" data-lucide="plug-zap" style="width:14px;height:14px;"></i> ${t('ia_automation_title')}
                                        </h4>
                                        <div class="flex flex-wrap gap-2">${staticAIAutomation.map(ia => `<span class="px-3 py-1 text-sm rounded bg-slate-900 border border-slate-700/50 text-purple-400">${ia}</span>`).join('')}</div>
                                    </div>
                                    <div class="mb-6">
                                        <h4 class="text-sm font-semibold text-slate-400 mb-2 border-b border-slate-700/50 pb-1 flex items-center gap-2">
                                            <i class="icon" data-lucide="message-square" style="width:14px;height:14px;"></i> ${t('ia_tooling_title')}
                                        </h4>
                                        <div class="flex flex-wrap gap-2">${staticAITools.map(ia => `<span class="px-3 py-1 text-sm rounded bg-slate-900 border border-slate-700/50 text-purple-400">${ia}</span>`).join('')}</div>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-slate-400 mb-2 border-b border-slate-700/50 pb-1 flex items-center gap-2">
                                            <i class="icon" data-lucide="sparkles" style="width:14px;height:14px;"></i> ${t('ia_generative_title')}
                                        </h4>
                                        <div class="flex flex-wrap gap-2">${staticAIToolsExtra.map(ia => `<span class="px-3 py-1 text-sm rounded bg-slate-900 border border-slate-700/50 text-purple-400">${ia}</span>`).join('')}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <!-- SEÇÃO SOBRE MIM -->
                <section id="sobre-mim" class="py-20 px-6 bg-slate-800/20 border-t border-b border-slate-700/50">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="text-3xl font-bold text-white mb-10 text-center md:text-left">${t('about_title')}</h2>
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="md:col-span-2">
                                <p class="text-lg text-slate-300 leading-relaxed mb-6">${t('about_text_1')}</p>
                                <p class="text-lg text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-700/20 p-4 rounded-lg">
                                    ${t('about_text_2')}<br class="mt-4"/><strong class="text-blue-300">${t('certifications_title')}</strong> ${t('certifications_text')}
                                </p>
                            </div>
                            <div class="md:col-span-1 bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-4 shadow-lg">
                                <h3 class="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"><i class="icon" data-lucide="award" style="width:20px;height:20px;"></i> ${t('results_title')}</h3>
                                <div class="flex items-center gap-4"><i class="icon text-purple-400" data-lucide="wallet" style="width:24px;height:24px;"></i><div><p class="text-2xl font-extrabold text-white">+R$ 6MM</p><p class="text-sm text-slate-400">${t('metric_1_label')}</p></div></div>
                                <div class="flex items-center gap-4 border-t border-slate-700/50 pt-4"><i class="icon text-green-400" data-lucide="trending-up" style="width:24px;height:24px;"></i><div><p class="text-2xl font-extrabold text-white">+11pp</p><p class="text-sm text-slate-400">${t('metric_2_label')}</p></div></div>
                                <div class="flex items-center gap-4 border-t border-slate-700/50 pt-4"><i class="icon text-red-400" data-lucide="shield-check" style="width:24px;height:24px;"></i><div><p class="text-lg font-semibold text-white">${t('metric_3_label')}</p><p class="text-sm text-slate-400">${t('metric_3_sublabel')}</p></div></div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- SEÇÃO CTA -->
                <section class="py-16 px-6 bg-slate-950">
                    <div class="max-w-6xl mx-auto text-center">
                        <h3 class="text-3xl font-bold text-white mb-4">${t('cta_title')}</h3>
                        <p class="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">${t('cta_subtitle')}</p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <a href="https://drive.google.com/file/d/1sFA3UdMvVx6QXRWOV1RNHg97zGhkANZp/view?usp=sharing" target="_blank" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all shadow-xl shadow-blue-900/40">${t('cta_button_1')}</a>
                            <a href="https://drive.google.com/file/d/1AS072ZVtYaJRnVx2Bn3wSx4easNflzVA/view?usp=sharing" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-blue-400 px-8 py-4 text-lg rounded-full font-semibold transition-all border border-slate-700">${t('cta_button_2')}</a>
                        </div>
                    </div>
                </section>

                <!-- SEÇÃO PROJETOS -->
                <section class="py-20 px-6 bg-slate-900/50">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="text-3xl font-bold mb-2">${t('projects_title')}</h2>
                        <p class="text-slate-400 mb-12">${t('projects_subtitle')}</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${localizedProjects.map((project) => `
                                <div onclick="toggleModal(${project.id})" class="group cursor-pointer bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                                    <div class="relative h-48 overflow-hidden bg-slate-800">
                                        <img src="${project.image}" alt="${project.title}" onerror="handleImageError(this)" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                                        <div class="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700 text-blue-400">
                                            <i class="icon" data-lucide="${project.icon}" style="width:24px;height:24px;"></i>
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <div class="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">${project.category}</div>
                                        <h3 class="text-xl font-bold text-white mb-3">${project.title}</h3>
                                        <p class="text-slate-400 text-sm line-clamp-2 mb-4">${project.description}</p>
                                        <div class="flex flex-wrap gap-2">${project.tools.map(tool => `<span class="text-xs bg-slate-900/50 border border-slate-700 px-2 py-1 rounded text-slate-300">${tool}</span>`).join('')}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
                
                <!-- SEÇÃO CONSULTORIA -->
                <section id="success-cases" class="py-20 px-6 bg-slate-950/70 border-t border-slate-700/50">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="text-3xl font-bold text-white mb-4 text-center">${t('consulting_title')}</h2>
                        <p class="text-xl text-slate-400 mb-12 text-center max-w-4xl mx-auto">${t('consulting_subtitle')}</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            ${localizedConsultingCases.map(caseItem => `
                                <div class="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start hover:border-blue-500/30 transition-all duration-300">
                                    <div class="flex items-center gap-3 mb-4">
                                        <span class="p-3 rounded-full bg-slate-900 border border-slate-700/50 ${caseItem.color}"><i class="icon" data-lucide="${caseItem.icon}" style="width:24px;height:24px;"></i></span>
                                        <h3 class="text-lg font-bold text-white leading-snug">${caseItem.title}</h3>
                                    </div>
                                    <div class="w-full h-32 overflow-hidden rounded-xl mb-4 relative"><img src="${caseItem.image}" alt="${caseItem.title}" onerror="handleImageError(this)" class="w-full h-full object-cover opacity-80"/><div class="absolute inset-0 bg-black/40"></div></div>
                                    <p class="text-slate-400 text-sm mb-4 flex-grow">${caseItem.description}</p>
                                    <div class="mt-auto pt-4 border-t border-slate-700/50"><p class="text-xs font-medium text-blue-400 flex items-center gap-1"><i class="icon" data-lucide="check-circle" style="width:14px;height:14px;"></i> ${caseItem.details}</p></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
                
                <!-- SEÇÃO CANAIS TELEGRAM -->
                <section class="py-16 px-6 bg-slate-800/20 border-t border-b border-slate-700/50">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="text-3xl font-bold text-white mb-4 text-center">${t('ia_groups_title')}</h2>
                        <p class="text-lg text-slate-400 mb-10 text-center max-w-4xl mx-auto">${t('ia_groups_subtitle')}</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <a href="${t('ia_group_1_link')}" target="_blank" class="bg-slate-900 p-6 rounded-xl border border-purple-500/30 hover:bg-slate-800/70 transition-colors flex items-center gap-4 shadow-lg shadow-black/20">
                                <i class="icon text-purple-400" data-lucide="zap" style="width:32px;height:32px;"></i>
                                <div><p class="text-lg font-bold text-white">${t('ia_group_1_title')}</p><span class="text-sm text-slate-400">${t('ia_group_1_link').replace('https://t.me/', '@')}</span></div>
                            </a>
                            <a href="${t('ia_group_2_link')}" target="_blank" class="bg-slate-900 p-6 rounded-xl border border-green-500/30 hover:bg-slate-800/70 transition-colors flex items-center gap-4 shadow-lg shadow-black/20">
                                <i class="icon text-green-400" data-lucide="trending-up" style="width:32px;height:32px;"></i>
                                <div><p class="text-lg font-bold text-white">${t('ia_group_2_title')}</p><span class="text-sm text-slate-400">${t('ia_group_2_link').replace('https://t.me/', '@')}</span></div>
                            </a>
                        </div>
                    </div>
                </section>

                <footer class="border-t border-slate-800 py-12 px-6 bg-slate-950 text-center">
                    <p class="text-slate-500 text-sm">© ${new Date().getFullYear()} ${t('footer_text')}</p>
                </footer>
            `;
            
            root.innerHTML = mainContent;

            if (selectedProjectId) {
                const project = localizedProjects.find(p => p.id === selectedProjectId);
                if (!project) return;
                const modalHtml = `
                    <div id="modal-project" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                        <div class="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                            <button onclick="toggleModal(null)" class="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white"><i class="icon" data-lucide="x" style="width:24px;height:24px;"></i></button>
                            <div class="grid md:grid-cols-2 gap-0">
                                <div class="h-64 md:h-auto bg-slate-800 relative"><img src="${project.image}" alt="${project.title}" onerror="handleImageError(this)" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div></div>
                                <div class="p-8 md:p-10 flex flex-col justify-center">
                                    <div class="flex items-center gap-3 mb-4"><span class="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"><i class="icon" data-lucide="${project.icon}" style="width:20px;height:20px;"></i></span><span class="text-sm font-semibold text-slate-400 uppercase tracking-wider">${project.category}</span></div>
                                    <h2 class="text-3xl font-bold text-white mb-4">${project.title}</h2>
                                    <p class="text-slate-300 leading-relaxed mb-6">${project.description}</p>
                                    <div class="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 mb-8"><h4 class="text-sm font-semibold text-white mb-2 flex items-center gap-2"><i class="icon" data-lucide="brain-circuit" style="width:16px;height:16px; color:#c084fc;"></i> ${t('modal_tech_details_title')}</h4><p class="text-slate-400 text-sm">${project.details}</p></div>
                                    <div><h4 class="text-sm font-semibold text-slate-500 mb-3 uppercase text-xs">${t('modal_stack_title')}</h4><div class="flex flex-wrap gap-2">${project.tools.map(tool => `<span class="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">${tool}</span>`).join('')}</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                root.insertAdjacentHTML('beforeend', modalHtml);
            }
            lucide.createIcons();
        }

        renderPortfolio();
    </script>
</body>
</html>
