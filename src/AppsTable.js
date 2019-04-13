import React from 'react';

import {Link} from "react-router-dom";

function AppsTable() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
          <th scope="row">2</th>
          <td>Task-Seven</td>
          <td>Vlad</td>
          <td><Link className="btn btn-success" to="/vlad-seven">Перейти {'>'}</Link></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Task-Six</td>
          <td>Vlad</td>
          <td><Link className="btn btn-success" to="/vlad-six">Перейти {'>'}</Link></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
=======
>>>>>>> master
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
                    <th scope="row">2</th>
<<<<<<< HEAD
                    <td>Task-Seven</td>
                    <td>Vlad</td>
                    <td><Link className="btn btn-success" to="/vlad-seven">Перейти {'>'}</Link></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Task-Six</td>
                    <td>Vlad</td>
                    <td><Link className="btn btn-success" to="/vlad-six">Перейти {'>'}</Link></td>
=======
                    <td>Игра</td>
                    <td>Сергей</td>
                    <td><Link className="btn btn-success" to="/s-sushkevich">Перейти {'>'}</Link></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Бродилка</td>
                    <td>Кирилл</td>
                    <td><Link className="btn btn-success" to="/filippovich">Перейти {'>'}</Link></td>
>>>>>>> master
                </tr>
                </tbody>
            </table>
        </div>
    );
<<<<<<< HEAD
=======
>>>>>>> 77b78e054dd11faadf7c8e31b86689d409252bf0
>>>>>>> master
}

export default AppsTable;