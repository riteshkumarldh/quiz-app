import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

export default function ProfilePage() {
  const [attempt, setAttempt] = useState(true);
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__name">
            Hi, <span>Ritesh kumar</span>
          </h2>

          <Input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            label="Full Name"
          />
          <Button>Save</Button>
        </div>
      </section>

      <section className="history">
        <div className="history__container container">
          <h2>Quiz History:</h2>

          {attempt ? (
            <table className="history__table">
              <thead>
                <tr>
                  <th>Sr. no.</th>
                  <th>Total</th>
                  <th>Attempted</th>
                  <th>Correct</th>
                  <th>Incorrect</th>
                  <th>Percent</th>
                  <th>status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>15</td>
                  <td>14</td>
                  <td>12</td>
                  <td>2</td>
                  <td>85.55%</td>
                  <td>Pass</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>15</td>
                  <td>14</td>
                  <td>12</td>
                  <td>2</td>
                  <td>85.55%</td>
                  <td>Pass</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="history__blank">
              <h3>You have not Attempted any quiz yet</h3>
              <Button as="link" to="/">
                Attempt Now
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
