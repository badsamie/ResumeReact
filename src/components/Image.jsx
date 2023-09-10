import React from "react";

// Стили для шрифта Montserrat
const fontStyles = {
  fontFamily: "Montserrat, sans-serif",
};

// Стили для карточки
const cardStyles = {
  textDecoration: "none",
  color: "inherit",
};

// Компонент для одной карточки
function Card(props) {
  return (
    <a className="card" href={props.href} style={cardStyles}>
      <div
        className="card__background"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="card__content">
        <p className="card__category">my projects</p>
      </div>
    </a>
  );
}

// Главный компонент, содержащий все карточки
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="card-grid">
        <Card
          href="https://github.com/badsamie/HakatonDota"
          imageUrl="https://opis-cdn.tinkoffjournal.ru/ip/V1OSUAJSaByWv1mu32csFXKrbT3z1xhOUljLPuVf38Y/w:1200/aHR0cHM6Ly9vcGlz/LWNkbi50aW5rb2Zm/am91cm5hbC5ydS9t/ZXJjdXJ5L2RvdGEy/LWluLTIwMjMtaW4u/aW50Z2loa3Rndmpm/Li5qcGc"
        />
        <Card
          href="https://github.com/badsamie/AEQ"
          imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///88PDs1NTR3d3eUvjIeHh0hISAwMC8qKinJyck5OTgmJiXOzs4rKyrf399ycnHp6en09PSsrKyBgYC3t7eenp6IiIf29va8vLxiYmFnZ2eOux7H3J6MjIympqbLy8tCQkFLS0oAAADs89/C2ZaLuQ6exEr4+vJaWlmVlZRGRkUVFROkx1uszGza6MG504TP4a2fxU7d6cV4MfFoAAAEcklEQVR4nO3aa3eaShiGYSU6IIinNtHqjjnaJG3T3d3//+O2wIDKYeadiMss13190zUgLzwzw4CdDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwEWZD4UNh+Mrs/HctPlkcX1T2uDL7fpu2kIJFjexsOFAeSZ+MGnednTrq9iv26j/MDtxkcO+/0XWchB0DUK/ucDhq/IMG6qbk9bYDbtKllNjhWHcWOB8rELTuel2/WjdWj0VN/726EJRU1OFhit4FzVfv0LwauzDRxj203MoyqmhQkOBs769vi3PM/TiY4RZfkQ51RXG/aqo8fDWancWIlXaTEWBnwfYEPNjJBlNd+8JGmcVxgOXH1jkV9BTr7NRZUCZ3L11gzA/AycI6rA4wZKcfqDCSV6gGo+a2izu9Wn2Xh32LNTdjXGCnH6gwodQJ9C40a0+0fG1w65F8oymB2EfT90rXMfZvu8t812eZdVyVxzq/YbCnLpXqAsMrR1skV1FT3jvIaVLC5fC8dS5wlmWEdXYBXfesqb9Vm9udEajr/NAltOsQn822mfa4D49db6od/1waCukM+p963S+RqKc6vnQjwrqp6nCUbZbyUSU7zx8kBdgpef6KMnF0pPktHJPY5mk177LZcn6TItjTZHR5MNU59R8ussVmlYTibHncszX6QHFC1lrOz3XJxlNiHJaqtBWoL4qspBujyhotyPqcVTlY5ckp4cVWu8jswHMGwuPaK5anS8OMpqYRvbxNB9pUrHtCnam2SHfSo8pPSRvKW1utjeO5gQ5zSpU17PE2tq9JmmF/pv0oNJUhd/sDSW6e+Nozp7TtMK+eCjIrqF/lmtYyWh6QNZ5P6lQXuA5+2FNRhPWnG4rdCjwnGNpWJPRhC2ng8CpwPPNh7UZTdjm/cGj28+f655Gz/VhTf+w5HTheH5H+q5C1Fjfl/5w+4laxZppXFi6zPsODGuLl1/v78+/9754aG1tUazrw71H6/mYI5n3HcyyFXDt+vB501utNv++5J8H6QVvYX04rH16WfRJ4TpKyrTG/97bWm2K63jltTNXdOufr0enyanpOc3TJimxt3nOv/DDNsaZ/WdP+4q50T7vOzE9a3teZSX+0Z8HKjj+7UV9Rk+YU+Pz0jSn2xKf9OerFp6X6rneV1WPeUDazanpmbfOae+7/jxtLaPVuX6fbd6fRDXvLVKPdQ9Zat5bPOYnT+d09c9RVe0preubmHM68ZveBfr1+62+e9p18nJOj1Ve1zcx5dS5wLr3h8XJK+f0SKKMJgzz/iR2LnC7v8o74P5JctqwZqrTmNMPXMHst0vv8XedvM2c6js0a0YTy+xfEz/vDr+eBDX/pkjFtvNW+i9GcIKczrI/w4xF64Np/s+Zg2/nzf+nkcyeB/+nWebTY+vj6efzX8vj6efz0mt1PP2MXnqrS89p531z4TntdP6ml/GCc7r193212S0VL9TT7z/2RgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA5/A/kNT3l3LtFWQAAAABJRU5ErkJggg=="
        />
        <Card
          href="https://github.com/badsamie/Makers.kg"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv1-7ThFQf3R1Gdc68RLNf-52xZK0uAESgWpmE3ZwgNyzqjUzjxkDYvFCmSjM2yzypyI&usqp=CAU"
        />
        <Card
          href="https://www.tripadvisor.com/"
          imageUrl="https://www.motherdesign.com/wp-content/uploads/TripadvisorxMotherDesign_07.jpg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
