import React from "react";
import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { openAccountTypeModal } from "../../actions/donateAction";
import { getAgreementTerms } from "../../actions/privacyPolicyAction";
import { RootState } from "../../store/configureStore";

interface AgreementTermsModalProps {}

const AgreementTermsModal: React.FC<AgreementTermsModalProps> = ({}) => {
  const dispatch = useDispatch();
  const { agreementTerms } = useSelector(
    (state: RootState) => state.privacyPolicy
  );

  const handleClose = () => {
    dispatch(getAgreementTerms(false, null, ""));
    agreementTerms.from === "sign_up" &&
      dispatch(
        openAccountTypeModal({
          name: "donor",
          id: 1,
          open: true,
          type: "donor",
        })
      );
  };

  return (
    <Modal setOpenModal={handleClose} openModal={agreementTerms.modal}>
      <EcosystemModal
        back={false}
        onClose={handleClose}
        header={agreementTerms.text || ""}
        className='modal_back'>
        <div className='agreementTerms'>
          <p>
            КОДЕКС ЭТИКИ КЛУБА 301
            <br />
            Уважаемые Члены Клуба 301, пожалуйста, внимательно ознакомьтесь с
            правилами Клуба 301!
            <br />
            Как действительный член Клуба 301 («Член Клуба»), Вы принимаете
            Кодекс Этики Клуба 301 и обязуетесь соблюдать Правила клуба 301 (в
            дальнейшем “Правила”).
          </p>
          <p>
            ЦЕЛИ КЛУБА 301
            <br />
            Целями Клуба 301 (далее - “Клуб”) являются:
            <br />
            1. создание сообщества единомышленников, объединенных общими
            ценностями и готовых превращать свои возможности в возможности всего
            Клуба;
            <br />
            2. совместное участие Членов Клуба в деятельности Клуба, в его
            мероприятиях и специальных программах;
            <br />
            3. содействие самореализации Членов Клуба, установление их личных и
            деловых контактов;
            <br />
            4. создание возможностей для общения между Членами Клуба;
            <br />
            5. развитие деловых контактов Членов Клуба;
            <br />
            6. ------------
          </p>
          <p>1. Общие положения и понятия</p>
          <p>
            1. Кодекс Этики Клуба 301 (далее - “Кодекс”) представляет собой свод
            общих профессиональных принципов и правил поведения, которыми
            надлежит руководствоваться всем членам Клуба 301 (далее - “Клуб”)
            независимо от формы вступления в Клуб.
            <br />
            2. Настоящий Кодекс является неотъемлемой частью и дополнением к
            Правилам Клуба 301.
            <br />
            3. Лицам, вступающим в Клуб, рекомендуется ознакомиться с
            положениями настоящего Кодекса и руководствоваться ими в процессе их
            членства в Клубе, а также принимать все меры для соблюдения
            положений настоящего Кодекса.
            <br />
            4. Целью Кодекса является обобщение этических норм и установление
            правил поведения членов Клуба в целях достижения создания и
            поддержания дружеской, безопасной и творческой среды, в которой
            лучше всего принимать верные решения и правильно строить
            взаимодействие в ходе работы.
          </p>
          <p>1. Основные принципы</p>
          <p>
            1. Основные принципы Клуба представляют собой основные ориентиры,
            которым должны руководствоваться члены Клуба.
            <br />
            2. Основными принципами Клуба являются честность, профессиональные
            отношения, уважение, справедливость и открытость.
            <br />
            &#8226; Честность: доверие проявляется к тем, кто работает, ничего
            не скрывая. Администрация Клуба демонстрирует честное отношение к
            членам и ожидает такого же проявления честности к себе и другим
            членам Клуба.
            <br />
            &#8226; Профессиональные отношения: означает уважительное отношение
            к требованиям, правам и обязанностям к другим членам Клуба и
            администрации Клуба. Помимо того, все члены Клуба должны стремиться
            уважать приоритеты и обязательства институтов или организаций, к
            которым они или другие члены Клуба имеют отношение.
            <br />
            &#8226; Уважение: все люди достойны уважения, как и их идеи.
            Разногласия, споры, критика могут стать движущей силой прогресса,
            если в отношениях присутствует уважение, в противном случае они
            будут разрушительными.
            <br />
            &#8226; Справедливость: чтобы быть справедливым и беспристрастным,
            необходимо принимать во внимание всех вовлеченных в ситуацию лиц или
            всех лиц, на которых может повлиять то или иное решение. Двойные
            стандарты в применении правил — это проявление пристрастности и
            несправедливости.
            <br />
            &#8226; Открытость: мы говорим об ошибках, мы извлекаем из них уроки
            и допускаем их возможность. Мы открыто говорим о проблемах и рисках.
            Все люди совершают ошибки, но необходимо уметь извлекать из них
            пользу, поэтому следует открыто говорить об их совершении, чтобы на
            основе опыта вносить коррективы в работу.
          </p>
          <p>1. Основные правила</p>
          <p>
            1.  В процессе взаимодействия друг с другом и с администрацией Клуба
            члены Клуба обязаны соблюдать правила, закрепленные в данном
            разделе, для обеспечения эффективного сотрудничества и создания
            такой атмосферы в Клубе, где признают и ценят индивидуальные
            различия и относятся друг к другу с уважением.
            <br />
            2. Любые проявления национальной, расовой и религиозной
            нетерпимости, как и любые оскорбительные высказывания, а также
            притеснение, преследование или преднамеренное причинение
            беспокойства не допускаются и будут основанием для прекращения
            членства в Клубе как не соответствующие его ценностям.
            <br />
            3. Мы ожидаем от членов Клуба уважительного и ответственного
            поведения. Это означает уважать себя и проявлять уважение к другим,
            а также нести ответственность за свои действия и последствия тех
            действий, которые будут признаны недопустимыми, воздерживаться от
            любых проявлений агрессии и насилия.
            <br />
            4. Каждый член Клуба имеет право при возникновении сомнений
            относительно этичности и законности собственных действий/бездействий
            или действий/бездействий других членов, возникновении вопросов по
            применению Кодекса задавать вопросы Администрации Клуба для
            уточнения.
            <br />
            5.  В процессе взаимодействия друг с другом, с третьими лицами и с
            администрацией Клуба члены Клуба должны воздерживаться от:
            <br />
            &#8226; любого вида высказываний и действий дискриминационного
            характера по признакам пола, возраста, расы, национальности, языка,
            гражданства, социального, имущественного или семейного положения,
            состояния здоровья, политических или религиозных предпочтений;
            <br />
            &#8226; грубости, проявлений пренебрежительного тона, заносчивости,
            предвзятых замечаний, предъявления неправомерных, незаслуженных
            обвинений;
            <br />
            &#8226; угроз, оскорбительных выражений или реплик, действий,
            препятствующих нормальному общению или провоцирующих противоправное
            поведение;
            <br />
            &#8226; любого проявления насилия.
          </p>
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default AgreementTermsModal;
