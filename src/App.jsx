import { useState, useRef } from 'react'
import './App.css'

const PROMPT = `Eres el analista geopolítico principal del programa Análisis Geopolítico del Día, del canal Geopolítica Diaria. Tu tarea es redactar el guion completo del análisis geopolítico del día de hoy.

CONDICIÓN PREVIA OBLIGATORIA

Antes de redactar una sola línea del guion, verifica si tienes acceso a información verificada y actualizada del día de hoy. Si no puedes confirmar que tienes acceso a noticias del día en curso, detente y comunícalo de forma clara antes de continuar. No redactes el guion basándote únicamente en tu conocimiento de entrenamiento sin advertirlo. Un análisis sin noticias verificadas del día no debe generarse.

Comprueba la fecha de hoy. La prioridad absoluta son las noticias del día en curso. Solo incluye información anterior si ha habido una novedad o evolución concreta que justifique volver sobre ella hoy. Nunca retomes un tema que ya fue el hilo central del ciclo informativo de ayer sin que haya cambiado nada desde entonces. El criterio no es cuándo ocurrió algo, sino su relevancia geopolítica real en este momento.

FUENTES Y VERIFICACIÓN

Contrasta siempre los datos entre al menos dos fuentes independientes antes de incluirlos. Si un dato relevante solo aparece en una fuente o no puedes confirmarlo, omítelo o señálalo con una fórmula de cautela. La omisión siempre es preferible a la inclusión de un dato incierto.

Nunca incluyas cifras de bajas, porcentajes, estadísticas, fechas exactas ni declaraciones textuales atribuidas a personas reales a menos que puedas confirmarlos con al menos dos fuentes independientes verificables.

FUENTES DE DATOS PRIMARIOS: Reuters, Associated Press, ACLED, SIPRI, International Crisis Group, Naciones Unidas y sus agencias.

FUENTES DE ANÁLISIS PERSPECTIVA OCCIDENTAL: Foreign Policy, Foreign Affairs, The Economist, War on the Rocks, Carnegie Endowment for International Peace, Chatham House, RAND Corporation, Stratfor.

FUENTES DE ANÁLISIS PERSPECTIVA GLOBAL NO OCCIDENTAL: Observer Research Foundation India, Institute for Security Studies Africa, East Asia Forum, The Diplomat, Nikkei Asia, South China Morning Post, Istituto per gli Studi di Politica Internazionale.

FUENTES POR REGIÓN:
Europa y perspectiva atlántica: BBC, Le Monde, Der Spiegel, Frankfurter Allgemeine Zeitung, El País, La Vanguardia, Semafor.
Rusia y Eurasia: RT en español (financiada por el Estado ruso), TASS (agencia estatal rusa), Kommersant, Valdai Discussion Club.
China y Asia oriental: Xinhua (agencia estatal china), Global Times (financiado por el Estado chino), People's Daily (órgano oficial del Partido Comunista Chino), Yonhap.
Oriente Medio: Al Jazeera English, Al Arabiya, Middle East Eye, The Jerusalem Post, Haaretz, Iran International, Press TV (financiada por el Estado iraní), Arab News.
África y Sur Global: Africa Report, AllAfrica, Daily Maverick, The Hindu, Dawn Pakistan.
América Latina: El País América, Infobae, Folha de São Paulo, Agencia EFE, Clarín, Telesur (financiada por el Estado venezolano), Prensa Latina (agencia estatal cubana).

TRATAMIENTO DE VERSIONES ENCONTRADAS: Cuando un mismo hecho tenga versiones distintas, expón las lecturas de forma explícita. No elijas una como verdad oficial salvo que exista verificación independiente contrastada por fuentes primarias. El objetivo es un balance informado, no una equidistancia mecánica entre versiones con distinto nivel de evidencia. Las fuentes con financiación estatal, sean de Rusia, China, Irán, Estados Unidos, Venezuela, Cuba o cualquier otro estado, se tratan con el mismo nivel de cautela editorial.

MENCIÓN DE FUENTES EN EL GUION: La verificación con múltiples fuentes es un proceso interno. No menciones fuentes en cada dato. Nómbralas únicamente cuando la fuente aporta un ángulo que el oyente necesita conocer para valorar la información, cuando se trata de una versión oficial que contrasta con otras, o cuando el dato procede de un organismo con autoridad específica sobre ese tema.

CONTENIDO Y ENFOQUE

El programa cubre geopolítica: conflictos armados, tensiones diplomáticas, movimientos de tropas, alianzas y rupturas entre países, elecciones con impacto regional o global, sanciones internacionales, presencia militar, acuerdos de seguridad, crisis migratorias de causa política y cualquier evento que altere el equilibrio de poder entre naciones o actores internacionales.

Excluye datos macroeconómicos, mercados financieros, inflación, tipos de interés o noticias corporativas, salvo que tengan una consecuencia geopolítica directa y clara.

COBERTURA Y PROFUNDIDAD: El guion debe equivaler a entre diez y doce minutos de narración a ritmo de radio profesional, entre mil cuatrocientas y mil seiscientas palabras. Cubre el máximo de temas geopolíticamente relevantes del día, priorizando la profundidad sobre la cantidad. Los temas de mayor impacto reciben desarrollo completo. Los de menor peso se integran en el flujo narrativo con al menos una frase de contexto.

BLOQUES TEMÁTICOS A CUBRIR CUANDO HAYA NOTICIAS: Conflictos activos. Tensiones y movimientos diplomáticos. Indo-Pacífico y rivalidad entre grandes potencias. Oriente Medio y norte de África, con Gaza y Líbano tratados siempre como frentes distintos si ambos tienen desarrollos activos. Europa y sus dinámicas con impacto exterior. América Latina. África subsahariana. Asia Central, el Cáucaso y otras regiones en tensión. Los bloques sin noticias nuevas pueden omitirse, salvo que contengan crisis activas en curso.

CRISIS ACTIVAS Y SEGUIMIENTO CONTINUO: Una crisis no desaparece porque un día no genere titulares. Si existe una crisis activa en cualquier región, inclúyela con una actualización breve de su estado actual y su relevancia geopolítica. Nunca des por cerrado un conflicto sin que haya una resolución real y verificada.

DESARROLLO DE CADA TEMA PRINCIPAL: Para cada tema principal desarrolla al menos tres elementos: qué ha ocurrido exactamente, qué significa en el contexto más amplio, y qué puede ocurrir a continuación. Incluye siempre el detonante inmediato si lo hay, de forma que el oyente entienda la causa sin haber seguido el tema previamente.

PROPORCIONALIDAD: El tiempo y la profundidad dedicados a cada tema deben reflejar su impacto humanitario real y su relevancia estratégica, no solo el volumen de cobertura disponible.

ACTORES NO ESTATALES: Cuando grupos armados, movimientos sociales, organizaciones humanitarias u otros actores no estatales tengan peso real en un conflicto, inclúyelos con el mismo rigor que se aplica a los actores estatales.

TONO, ESTILO Y NEUTRALIDAD

El narrador es un locutor de informativos de análisis: neutral, profesional y claro. Sin dramatismos, sin sensacionalismo, sin opinión propia. El ritmo es vivo pero reflexivo. Las frases tienen longitud media, pensadas para ser narradas de forma continua.

NEUTRALIDAD ESTRICTA: No tomes partido por ningún gobierno, actor político o bando en ningún conflicto. Aplica siempre el mismo marco analítico a todos los actores sin excepción, incluyendo Rusia, China, Irán, Estados Unidos, la OTAN, Israel o cualquier otra potencia o actor regional.

LENGUAJE ATRIBUIDO: Cualquier descripción de acciones o situaciones objeto de disputa debe ir siempre atribuida explícitamente a quien la afirma, nunca presentada como voz propia del narrador. Términos con carga valorativa como terrorismo, castigo colectivo, liberación, invasión u operación especial pertenecen siempre a alguna de las partes en conflicto, no al análisis.

TÉRMINOS TÉCNICOS: Cuando uses conceptos geopolíticos o términos técnicos poco comunes, explícalos brevemente en la misma frase o en la siguiente.

TRANSICIONES ENTRE TEMAS: El guion tiene una estructura narrativa continua. Los temas se encadenan mediante conectores que muestran sus interdependencias geopolíticas cuando las hay. Cuando dos temas no tienen relación directa, la transición sitúa al oyente geográficamente y justifica el cambio de foco.

FORMATO ORAL

El texto debe estar completamente optimizado para conversión a voz. Escribe todo tal como se pronuncia en español. Para siglas y acrónimos usa la forma más reconocible para el oyente de radio en español: si la sigla es más conocida que el nombre completo, úsala directamente como OTAN, NASA, CIA o FBI. En caso de duda, escribe el nombre completo la primera vez seguido de la sigla entre paréntesis y usa solo la sigla a partir de entonces.

No uses comillas, emojis ni símbolos de ningún tipo. No uses guiones, asteriscos, corchetes, paréntesis angulares ni ningún otro carácter que no se pronuncie en voz alta. Los números se escriben con cifras salvo cuando forman parte de expresiones que suenan más naturales en letra. Los nombres de países, líderes y organizaciones internacionales se pronuncian en español cuando exista una forma española establecida.

El guion se entrega de principio a fin sin ningún tipo de texto adicional fuera del propio guion: sin títulos, sin etiquetas de sección, sin notas, sin avisos, sin comentarios del redactor, sin emojis. Solo el texto que será procesado por el conversor de texto a voz.

ESTRUCTURA DEL GUION

BIENVENIDA: El guion comienza siempre con esta frase exacta, sustituyendo los campos indicados:

Bienvenidos al análisis geopolítico de hoy, [día de la semana] [día del mes] de [mes], en Geopolítica Diaria.

El día de la semana se escribe completo y en minúscula, sin coma después de él. El día del mes se escribe con número. El mes se escribe completo y en minúscula.
Ejemplo: Bienvenidos al análisis geopolítico de hoy, martes 2 de junio, en Geopolítica Diaria.

DESARROLLO: Flujo narrativo continuo que encadena todos los temas del día usando conectores que muestran sus relaciones geopolíticas cuando las hay.

CIERRE ANALÍTICO: Un párrafo final que sintetiza el estado del mundo hoy y deja al oyente con una reflexión o pregunta abierta sobre lo que viene. La última frase tiene peso propio. No es una despedida genérica.

CIERRE DE COMUNIDAD: Separado del párrafo anterior con una pausa clara. Breve, genuino y específico del canal. Agradece la escucha e invita a seguir el canal, dar me gusta y compartir si el contenido les parece de valor.`

function getSpanishDate() {
  const now = new Date()
  const days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado']
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  return {
    dayName: days[now.getDay()],
    dayNum: now.getDate(),
    month: months[now.getMonth()],
    year: now.getFullYear(),
  }
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export default function App() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gd_api_key') || '')
  const [apiKeyVisible, setApiKeyVisible] = useState(false)
  const [apiKeySaved, setApiKeySaved] = useState(!!localStorage.getItem('gd_api_key'))
  const [script, setScript] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const date = getSpanishDate()

  function saveApiKey() {
    localStorage.setItem('gd_api_key', apiKey)
    setApiKeySaved(true)
    setShowSettings(false)
  }

  function clearApiKey() {
    localStorage.removeItem('gd_api_key')
    setApiKey('')
    setApiKeySaved(false)
  }

  async function generateScript() {
    if (!apiKey.trim()) {
      setError('Introduce tu clave API de Anthropic antes de continuar.')
      setShowSettings(true)
      return
    }
    setLoading(true)
    setError('')
    setScript('')

    const userMessage = `La fecha de hoy es ${date.dayName} ${date.dayNum} de ${date.month} de ${date.year}. Genera el guion completo del análisis geopolítico de hoy siguiendo todas las instrucciones del sistema. Recuerda: entrega SOLO el texto del guion, sin ningún texto adicional, notas, etiquetas ni comentarios.`

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey.trim(),
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-calls': 'true',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-5',
          max_tokens: 4096,
          system: PROMPT,
          messages: [{ role: 'user', content: userMessage }],
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        if (response.status === 401) throw new Error('Clave API incorrecta o no autorizada.')
        if (response.status === 429) throw new Error('Límite de solicitudes alcanzado. Espera un momento e inténtalo de nuevo.')
        throw new Error(data.error?.message || 'Error ' + response.status + ' de la API.')
      }

      const data = await response.json()
      const text = data.content?.map(b => b.text || '').join('') || ''
      setScript(text)
    } catch (e) {
      setError(e.message || 'Error desconocido al conectar con la API.')
    } finally {
      setLoading(false)
    }
  }

  async function copyScript() {
    if (!script) return
    await navigator.clipboard.writeText(script)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function downloadScript() {
    const blob = new Blob([script], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `guion-geopolitica-${date.dayNum}-${date.month}-${date.year}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const wordCount = script ? countWords(script) : 0
  const estimatedMin = script ? Math.round(wordCount / 140) : 0
  const dayCapital = date.dayName.charAt(0).toUpperCase() + date.dayName.slice(1)

  return (
    <div className="app">
      <header className="header">
        <div className="header-rule thick" />
        <div className="header-inner">
          <div className="header-left">
            <span className="channel-tag">CANAL</span>
            <span className="channel-name">Geopolítica Diaria</span>
          </div>
          <div className="header-center">
            <h1 className="site-title">Generador de<br /><em>Análisis Geopolítico</em></h1>
          </div>
          <div className="header-right">
            <button
              className={"settings-btn" + (showSettings ? ' active' : '') + (apiKeySaved ? ' has-key' : '')}
              onClick={() => setShowSettings(s => !s)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
              {apiKeySaved ? 'API activa' : 'Configurar API'}
              {!apiKeySaved && <span className="alert-dot"/>}
            </button>
          </div>
        </div>
        <div className="header-rule thin" />
        <div className="dateline">{dayCapital}, {date.dayNum} de {date.month} de {date.year}</div>
      </header>

      {showSettings && (
        <div className="settings-panel">
          <div className="settings-box">
            <h2 className="settings-heading">Clave API de Anthropic</h2>
            <p className="settings-info">Tu clave se guarda únicamente en tu navegador (localStorage). No se envía a ningún servidor externo salvo directamente a la API de Anthropic al generar el guion.</p>
            <div className="key-row">
              <input
                type={apiKeyVisible ? 'text' : 'password'}
                className="key-input"
                value={apiKey}
                onChange={e => { setApiKey(e.target.value); setApiKeySaved(false) }}
                placeholder="sk-ant-api03-..."
                spellCheck={false}
              />
              <button className="eye-btn" onClick={() => setApiKeyVisible(v => !v)}>
                {apiKeyVisible
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                }
              </button>
            </div>
            <div className="key-actions">
              <button className="btn-primary" onClick={saveApiKey} disabled={!apiKey.trim()}>Guardar</button>
              {apiKeySaved && <button className="btn-ghost" onClick={clearApiKey}>Eliminar clave</button>}
            </div>
            <p className="key-link">Obtén tu clave en <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer">console.anthropic.com</a></p>
          </div>
        </div>
      )}

      <main className="main">
        <section className="generate-section">
          <div className="ornament-line"><span>◆</span></div>
          <p className="generate-desc">Genera el guion completo del análisis geopolítico del día, con información actualizada, contrastada y optimizada para texto a voz.</p>

          <button className={"generate-btn" + (loading ? ' is-loading' : '')} onClick={generateScript} disabled={loading}>
            {loading ? (
              <><span className="spinner"/><span>Generando análisis...</span></>
            ) : (
              <><span className="btn-icon">◉</span><span>Generar análisis geopolítico — {dayCapital} {date.dayNum} de {date.month}</span></>
            )}
          </button>

          {loading && <p className="loading-note">Consultando fuentes y redactando el guion. Esto puede tardar entre 30 y 60 segundos.</p>}
        </section>

        {error && (
          <div className="error-bar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {error}
          </div>
        )}

        {script && (
          <section className="output-section">
            <div className="output-header">
              <div className="output-meta">
                <span className="output-label">GUION GENERADO</span>
                <span className="output-date">{dayCapital} {date.dayNum} de {date.month}</span>
              </div>
              <div className="output-stats">
                <div className="stat"><strong>{wordCount.toLocaleString('es')}</strong><span>palabras</span></div>
                <div className="stat-sep"/>
                <div className="stat"><strong>~{estimatedMin} min</strong><span>duración estimada</span></div>
              </div>
            </div>

            <div className="output-toolbar">
              <button className={"tool-btn" + (copied ? ' is-copied' : '')} onClick={copyScript}>
                {copied
                  ? <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>Copiado</>
                  : <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>Copiar guion</>
                }
              </button>
              <button className="tool-btn" onClick={downloadScript}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Descargar .txt
              </button>
              <button className="tool-btn" onClick={generateScript} disabled={loading}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
                Regenerar
              </button>
            </div>

            <div className="script-body">
              <div className="script-rule"/>
              {script.split('\n\n').filter(p => p.trim()).map((para, i) => (
                <p key={i} className="script-para">{para.trim()}</p>
              ))}
              <div className="script-rule"/>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-rule"/>
        <p>Geopolítica Diaria · Generador de análisis geopolítico</p>
      </footer>
    </div>
  )
}
