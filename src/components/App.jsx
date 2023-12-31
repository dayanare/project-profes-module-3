


import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [name, setName] = useState("")
  const [slogan, setSlogan] = useState("")
  const handleInput = (ev)=>{
    const id = ev.target.id;
    const value = ev.target.value;
    if(id === "name"){
      setName(value)
    }else if(id=== "slogan"){
      setSlogan(value)
    }
  }

  return (
    <div className="container">
    <header className="header">
      <p className="text">Proyectos Molones</p>
    </header>
    <main className="main">
      <section className="preview">
        <img className="image" src="./images/cover.jpeg" alt="" />

        <section className="autor">
          <section className="info-project">
            <p className="subtitle">Personal Project Card</p>
            <hr className="line" />

            <h2 className="title">{name || "Elegant Workspace"}</h2>
            <p className="slogan">{slogan ||"Diseños Exclusivos"}</p>
            <p className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Libero, delectus? Voluptates at hic aliquam porro ad suscipit
              harum laboriosam saepe earum doloribus aperiam, ullam culpa
              accusantium placeat odit corrupti ipsum!
            </p>
            <section className="technologies">
              <p className="text">React JS, MongoDB</p>
            </section>
          </section>

          <section className="info-autor">
            <img className="image" src="./images/user.jpeg" alt="" />
            <p className="job">Full Stack Developer</p>
            <p className="name">Emmelie Björklund</p>
          </section>
        </section>
      </section>

      <section className="form">
        <h2 className="title">Información</h2>

        <section className="ask-info">
          <p className="subtitle">Cuéntanos sobre el proyecto</p>
          <hr className="line" />
        </section>

        <fieldset className="project">
          <input
            className="input"
            type="text"
            placeholder="Nombre del proyecto"
            name="name"
            id="name"
            onChange={handleInput}
          />
          <input
            className="input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            onChange={handleInput}
          />
          <input
            className="input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo"
          />
          <input
            className="input"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
          />
          <input
            className="input"
            type="text"
            placeholder="Tecnologías"
            name="technologies"
            id="technologies"
          />
          <textarea
            className="textarea"
            type="text"
            placeholder="Descripción"
            name="desc"
            id="desc"
          ></textarea>
        </fieldset>

        <section className="ask-info">
          <p className="subtitle">Cuéntanos sobre la autora</p>
          <hr className="line" />
        </section>

        <fieldset className="autor">
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="autor"
            id="autor"
          />
          <input
            className="input"
            type="text"
            placeholder="Trabajo"
            name="job"
            id="job"
          />
        </fieldset>

        <section className="buttons-img">
          <button className="btn">Subir foto de proyecto</button>
          <button className="btn">Subir foto de autora</button>
        </section>
        <section className="buttons-img">
          <button className="btn-large" >
            Crear Tarjeta
          </button>
        </section>

        <section className="card">
          <span className=""> La tarjeta ha sido creada: </span>
          <a href="" className="" target="_blank" rel="noreferrer"> </a>
        </section>
      </section>
    </main>
  </div>
  )
}

export default App
