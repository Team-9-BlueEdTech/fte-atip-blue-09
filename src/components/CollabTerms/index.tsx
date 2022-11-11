import Button from "../../components/Button";
import { usePartner } from "../../contexts/partner";
import logo from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

interface CollabTermsInterface {
  onAccept: () => void;
  onReject: () => void;
}

const CollabTerms = ({ onAccept, onReject }: CollabTermsInterface) => {
  const navigate = useNavigate();
  const { partner } = usePartner();

  return (
    <S.MainTerm>
      <S.DivInclude>
        <div>
          <img src={logo} width="300vw" alt="Logo da empresa aTip" />
        </div>
        <div>
          <S.H1>
            <S.PCenso>Censo</S.PCenso>Diversidade<S.Pe>&</S.Pe> Inclusão
          </S.H1>
        </div>
      </S.DivInclude>
      <S.Article>
        <p>Olá, que bom ter você por aqui! </p>
        <br />
        <p>
          Agradecemos a sua disponibilidade,com a sua participação ficamos mais
          próximos da ampla valorização da diversidade!
        </p>
        <br /> Somos a aTip, uma empresa focada em criar pontes entre
        profissionais neuroatípicos e o mercado de trabalho, e estamos
        conduzindo esta pesquisa na sua {partner?.name} para traçar um panorama
        sobre a Diversidade & Inclusão da empresa.
        <p>
          {" "}
          Acreditamos que a diversidade é uma parte fundamental dos negócios de
          sucesso e das condutas éticas de trabalho. Um ambiente de trabalho
          saudável inclui pessoas de diferentes contextos em toda a hierarquia.
          Por isso, queremos saber quem são as pessoas que fazem parte da{" "}
          {partner?.name} e a tornam única.
        </p>
        <br />{" "}
        <p>
          Essa pesquisa é um lugar seguro para você se manifestar e caso não
          deseje se identificar poderá responde-la de forma anônima. As
          respostas são confidenciais e não serão usadas para identificar a
          pessoa respondente.
        </p>
        <p>
          {" "}
          Nós podemos publicar relatórios de pesquisa internos que incluem seus
          comentários e respostas, mas os seus dados pessoais ou qualquer
          informação que te identifique não serão exibidos, garantindo seu
          anonimato.{" "}
        </p>
        <br />
        <p>
          <b>*IMPORTANTE* </b>
        </p>
        <br />
        <p>
          Construímos esse questionário com muito respeito e cuidado, mas
          sabemos que algumas das perguntas podem desencadear sentimentos
          desconfortáveis. Então gostaríamos que você tivesse em mente o tempo
          inteiro que sua participação é voluntária, e se, a qualquer momento,
          você estiver se sentindo desconfortável com as questões, pode
          interromper o preenchimento do formulário sem qualquer tipo de
          prejuízo.
        </p>
        <p>O objetivo desta pesquisa é: </p> <br /> - Conhecer a dimensão da
        diversidade de pessoas na {partner?.name} e em quais áreas é preciso
        promover maior representatividade;
        <br /> - Conhecer as interseccionalidades existentes no quadro de
        funcionários da {partner?.name};<br /> - Celebrar a diversidade da
        comunidade que já temos na {partner?.name};<br /> - Reconhecer situações
        que podem estar deixando nossas pessoas colaboradoras desconfortáveis;
        <br /> - Adaptar nossos programas de aprendizado e desenvolvimento aos
        interesses das pessoas;
        <br /> - Avaliar o nível de diversidade e inclusão ao longo do tempo.
        <div>
          <Button text={"Continuar"} onClick={onAccept} />
          <Button text={"Recusar"} onClick={onReject} />
        </div>
      </S.Article>
    </S.MainTerm>
  );
};

export default CollabTerms;
