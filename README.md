# EBUY

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@my-mfe/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

**CREAZIONE DI UN'APPLICATIONE MULTI-FRONTEND UTILIZZANDO MODULE FEDERATION**

Nell'ambito dello sviluppo di applicazioni microfrontend con Module Federation, i termini "Applicazione Host" e "App-Shell" assumono significati specifici e sono elementi centrali di questa architettura:

### Applicazione Host

L'**Applicazione Host** è il punto di ingresso principale per l'applicazione microfrontend. È responsabile del caricamento delle diverse parti (o moduli) dell'applicazione, che possono essere sviluppate, distribuite e gestite indipendentemente l'una dall'altra. In un contesto di Module Federation, l'Applicazione Host ha i seguenti ruoli:

1. **Orchestrare i Microfrontends**: L'Applicazione Host coordina il caricamento e l'integrazione dei vari microfrontends. Funziona come un contenitore per i diversi moduli, assicurandosi che siano caricati nel contesto giusto e al momento giusto.

2. **Gestione delle Dipendenze**: Può condividere le dipendenze comuni tra i diversi microfrontends, riducendo la duplicazione e ottimizzando le prestazioni.

3. **Routing e Navigazione**: Solitamente, gestisce il routing ad alto livello, decidendo quali microfrontends caricare in base all'interazione dell'utente o ad altre logiche applicative.

4. **Punto di Aggregazione**: Funge da punto di aggregazione per le funzionalità e i servizi condivisi, come autenticazione, gestione dello stato globale, ecc.

### App-Shell

L'**App-Shell** è una struttura base, o "scheletro", dell'interfaccia utente dell'applicazione. In un'architettura microfrontend, l'App-Shell è utilizzata per fornire una coerenza visiva e funzionale attraverso l'intera applicazione. Le sue caratteristiche includono:

1. **Layout di Base**: Definisce il layout di base dell'applicazione, inclusi header, footer, e aree di navigazione. Questo layout è generalmente statico e rimane costante mentre i contenuti (i microfrontends) cambiano.

2. **Caricamento Iniziale**: Può mostrare un'interfaccia minima, come una barra di navigazione o un footer, durante il caricamento iniziale dell'applicazione, migliorando l'esperienza utente percepita.

3. **Integrazione dei Microfrontends**: Fornisce i "punti di montaggio" o i contenitori in cui i vari microfrontends vengono inseriti o sostituiti dinamicamente.

4. **Gestione dello Stato e dei Servizi Condivisi**: Può ospitare la logica per gestire lo stato globale dell'applicazione o servizi condivisi.

### Relazione tra Applicazione Host e App-Shell

In molte architetture microfrontend, l'App-Shell e l'Applicazione Host possono essere considerate la stessa entità o, in alcuni casi, l'App-Shell può essere un'implementazione all'interno dell'Applicazione Host. L'App-Shell fornisce la struttura UI di base e l'Applicazione Host si occupa di caricare e orchestrare i microfrontends all'interno di quella struttura.

### Best Practices

Quando si sviluppano microfrontends con Module Federation, è importante seguire le best practices, come:

- Mantenere un alto livello di indipendenza e decoupling tra i microfrontends.
- Gestire in modo efficiente le dipendenze condivise per ottimizzare le prestazioni.
- Assicurarsi che l'App-Shell sia leggera e focalizzata sulla struttura base, evitando di sovraccaricare di logica applicativa.
- Utilizzare un approccio coerente per il routing e la gestione dello stato.

Implementare correttamente questi concetti può aiutare a creare applicazioni microfrontend scalabili, manutenibili e performanti.

**CONVERTIAMO LA NOSTRA APPLICAZIONE MULTI-FRONTEND MULTI SPA IN MODALITA' FEDERATA**

Questo approccio fornirà la stessa esperienza di una classica applicazione SPA.

Di seguito i passi necessari per convertire EBUY in un'applicazione MultiFrontend multi-SPA in un'applicazione MultiFrontend con Module Federate:

**1. Creare una nuova applicazione Host che chiameremo App-shell.**

**2. Rimuovere il componente header da ogni SPA e spostarlo in App-shell.**

**3. Definire le applicazioni remote, ossia Catalogo e Cassa, che devono essere caricate nell'applicazione host.**

**4. Definire l'ingresso remoto per le microapplicazioni Catalogue e Checkout.**
 
 **Pulire**<br/> 
 Con Module Federation, l'applicazione host si occupa dell'instradamento e non è necessario utilizzare le configurazioni proxy definite nel file proxy.conf.json. Quindi, cancelleremo questo file e rimuoveremo le configurazioni non necessarie dal file project.json. Cancellare /apps/ catalog/ proxy.conf.json e, nel file catalog/ project.json, cancellare la seguente riga: "proxyConfig": "apps/ catalog/ proxy.conf.json" Già che ci siamo, possiamo anche sbarazzarci di baseRef, che abbiamo definito nel nostro file checkout/ project. json. Individuare questa riga e cancellarla: "baseHref": "/ checkout/"

I**mpostazione dell'applicazione host App-shell**<br/>
Ora siamo pronti per iniziare la migrazione delle nostre applicazioni multi-SPA a Module Federation.
Nx Console dispone di un ingegnoso generatore per la creazione di un host e di applicazioni remote per Module Federation. Seguite questi passaggi:





