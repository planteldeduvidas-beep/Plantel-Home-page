export default function MembroCard({ membro }) {
  return (
    <article className="plab-member">

      <div className="plab-member__photo">
        <img
          src={membro.foto}
          alt={`Foto de ${membro.nome}`}
          loading="lazy"
        />
      </div>

      <div className="plab-member__content">

        <h3>{membro.nome}</h3>

        <span className="plab-member__role">
          {membro.cargo}
        </span>

        <div className="plab-member__skills">
          {membro.tecnologias.map((tecnologia) => (
            <span key={tecnologia}>
              {tecnologia}
            </span>
          ))}
        </div>

        <p>
          {membro.descricao}
        </p>

      </div>

    </article>
  );
}