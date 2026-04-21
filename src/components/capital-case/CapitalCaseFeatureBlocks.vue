<template>
  <div>
    <div class="frame-14">
      <div class="frame-15">
        <div class="text-wrapper-15">Раздел Edu Hub</div>
        <p class="text-wrapper-14">
          Так как бизнес хотел расширить целевую аудиторию и охватить новичков в
          трейдинге, нужно было интегрировать раздел, который способствовал бы
          обучению пользователей.
        </p>
      </div>

      <div class="frame-16">
        <div class="iphone-space-silver-wrapper">
          <div class="iphone-space-silver">
          </div>
        </div>

        <div class="frame-17" aria-hidden="true">
          <div class="frame-18"></div>
          <div class="frame-19"></div>
        </div>
      </div>
    </div>

    <div class="frame-20">
      <div class="frame-10">
        <div class="text-wrapper-10">ПОИСК АКТИВОВ</div>
        <p class="text-wrapper-11">
          В самом начале проекта я проводила пользовательские интервью, где стоял
          вопрос о поиске активов разными слоями ЦА через фильтр «Уровень риска»
        </p>
      </div>

      <div class="frame-10">
        <div class="text-wrapper-10">ИНСАЙТ</div>
        <p class="text-wrapper-12">
          Опытные трейдеры отметили, что риск - это совсем не категория интерфейса,
          а собственная аналитическая работа, новички же предпочитают простые
          настройки, где все за них продумано.
        </p>
      </div>
    </div>

    <div class="frame-21">
      <div class="frame-15">
        <div class="text-wrapper-15">Скринер</div>
        <p class="text-wrapper-14">
          После получения инсайтов о фильтрации, я создала полноценный инструмент
          для опытных трейдеров с логикой: от широкого к узкому — сначала класс
          актива (акции / ETF / форекс / индексы / сырьё), затем параметры. Так
          пользователь мог настраивать все точечно и уникально под себя.
        </p>
      </div>

      <div class="frame-16">
        <div class="iphone-space-silver-wrapper">
          <div class="view-wrapper">
            <div class="view"></div>
          </div>
        </div>

        <div class="frame-17" aria-hidden="true">
          <div class="frame-18"></div>
          <div class="frame-19"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame-14 {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  gap: 90px;
  padding: 100px 0 100px 52px;
  position: absolute;
  top: 3052px;
  left: 0;
}

.frame-15 {
  display: flex;
  flex-direction: column;
  width: 662px;
  align-items: flex-start;
  gap: 48px;
  padding: 20px 0;
  position: relative;
}

.text-wrapper-15 {
  position: relative;
  width: 625px;
  margin-top: -1px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #1c1f23;
  font-size: 54px;
  letter-spacing: 0;
  line-height: 64px;
}

.text-wrapper-14 {
  position: relative;
  align-self: stretch;
  color: #1c1f23;
  font-size: 32px;
  line-height: 44px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-16 {
  display: inline-flex;
  align-items: center;
  gap: 118px;
  padding: 0 52px 0 0;
  position: relative;
  flex: 0 0 auto;
}

.iphone-space-silver-wrapper {
  position: relative;
  width: 934px;
  height: 860px;
  background-color: #f1f3f7;
  border-radius: 43px;
  overflow: hidden;
}

.iphone-space-silver {
  position: relative;
  top: calc(50% - 413px);
  left: calc(50% - 250px);
  width: 500px;
  height: 826px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/img/capital-edu.png');
  background-size: cover;
  background-position: 50% 50%;
}

.frame-17 {
  display: flex;
  flex-direction: column;
  width: 12px;
  height: 832px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 241px 0;
  position: relative;
}

.frame-18 {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 12px;
  background-color: #3f4042;
  border-radius: 12px;
}

.frame-19 {
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 12px;
  background-color: #e2e4e8;
  border-radius: 12px;
}

.frame-20 {
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  gap: 48px;
  padding: 100px 0 100px 52px;
  position: absolute;
  top: 4112px;
  left: 1px;
}

.frame-10 {
  display: flex;
  align-items: flex-start;
  gap: 80px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.text-wrapper-10 {
  position: relative;
  width: 672px;
  margin-top: -1px;
  color: #1c1f23;
  font-size: 32px;
  line-height: normal;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.text-wrapper-11 {
  position: relative;
  width: 882px;
  margin-top: -1px;
  color: #1c1f23;
  font-size: 54px;
  line-height: 64px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.text-wrapper-12 {
  position: relative;
  width: 934px;
  margin-top: -1px;
  color: #1c1f23cc;
  font-size: 32px;
  line-height: 44px;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
}

.frame-21 {
  display: flex;
  width: 1920px;
  align-items: flex-start;
  gap: 90px;
  padding: 40px 0 100px 52px;
  position: absolute;
  top: 4920px;
  left: 0;
}

.view-wrapper {
  position: relative;
  top: calc(50% - 413px);
  left: calc(50% - 250px);
  width: 500px;
  height: 826px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/img/capital-screener.png');
  background-size: cover;
  background-position: 50% 50%;
}

</style>
