import React from 'react';

import {Link} from "react-router-dom";

function AppsTable() {
    return (
        <div>
            <h1>Список приложений</h1>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Выполнил</th>
                    <th scope="col">Ссылка</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Кликер</td>
                    <td>Евгений</td>
                    <td><Link className="btn btn-success" to="/app1">Перейти {'>'}</Link></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Игра</td>
                    <td>Сергей</td>
                    <td><Link className="btn btn-success" to="/s-sushkevich">Перейти {'>'}</Link></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Бродилка</td>
                    <td>Кирилл</td>
                    <td><Link className="btn btn-success" to="/filippovich">Перейти {'>'}</Link></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AppsTable;