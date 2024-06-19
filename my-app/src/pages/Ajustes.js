import React, { useEffect, useState } from 'react';
import { gListArticles } from "../vars/global";

const Ajustes = () => {
    useEffect(() => { document.title = "Ajustes - Indicadores produccíon"; }, [])

    const [listArticles, setArticles] = useState(gListArticles());

    const miClickEvent = (event) => {
        let updatedArticles = [...listArticles];
        if (event.key == "Enter") {
            let inputId = event.target.id.split('_')[1];
            updatedArticles.forEach((article) => {
                if(article.id == inputId) {
                    article.num      = document.getElementById('numero_'+inputId).value;
                    article.desc     = document.getElementById('producto_'+inputId).value;
                    article.ritmoMin = document.getElementById('min_'+inputId).value;
                    article.ritmoMax = document.getElementById('max_'+inputId).value;
                    article.pesoNom  = document.getElementById('pesonominal_'+inputId).value;
                    article.pesoMax  = document.getElementById('peso_'+inputId).value;
                }
            });
            localStorage.setItem('initData', JSON.stringify(updatedArticles));
            setArticles(updatedArticles);
        }
    };

    const createNewLine = () => {
        let idArticle = listArticles.reduce((maxId, article) => Math.max(maxId, article.id), 0) + 1;
        let newArticle = { id: idArticle, num: 0, desc: "", ritmoMin: 0, ritmoMax: 0, pesoNom: 0, pesoMax: 0 };
        let updatedArticles = [...listArticles, newArticle];
        localStorage.setItem('initData', JSON.stringify(updatedArticles));
        setArticles(updatedArticles);
    };

    const reloadPage = () => { window.location.reload(); }

    const deleteThisLine = (lineId) => {
        let updatedArticles = listArticles.filter(article => article.id !== lineId);
        localStorage.setItem('initData', JSON.stringify(updatedArticles));
        setArticles(updatedArticles);
    }

    return (
        <div>
            <header>
                <img src="/logo512.png" className="header_image" id="header_image" onClick={reloadPage} />
                <span className="page_title">Ajustes</span>
                <i className="fa fa-plus add_new_line" onClick={createNewLine}></i>
            </header>
            <section>
                <div><button type="button" className="btn-close" id="closeButton"></button></div>
                <table className="table table-striped">
                    <thead><tr>
                        <th scope="col">#</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Ritmo mínimo</th>
                        <th scope="col">Ritmo máximo</th>
                        <th scope="col">Peso nominal</th>
                        <th scope="col">Peso máximo</th>
                    </tr></thead>
                    <tbody>
                    {listArticles.map(article => (
                            <tr key={article.id}>
                                <td><i className="fa fa-trash deleteThisObj" aria-hidden="true" onClick={() => deleteThisLine(article.id)}></i></td>
                                <td><input onKeyDown={miClickEvent} id={`numero_${article.id}`} type="number" defaultValue={article.num} /></td>
                                <td><input onKeyDown={miClickEvent} id={`producto_${article.id}`} type="text" className="description" defaultValue={article.desc} /></td>
                                <td><input onKeyDown={miClickEvent} id={`min_${article.id}`} type="number" defaultValue={article.ritmoMin} /></td>
                                <td><input onKeyDown={miClickEvent} id={`max_${article.id}`} type="number" defaultValue={article.ritmoMax} /></td>
                                <td><input onKeyDown={miClickEvent} id={`pesonominal_${article.id}`} type="number" defaultValue={article.pesoNom} /></td>
                                <td><input onKeyDown={miClickEvent} id={`peso_${article.id}`} type="number" defaultValue={article.pesoMax} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div >
    );
};

export default Ajustes;



