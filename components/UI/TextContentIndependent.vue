<template>
  <!-- 
    Компонет принимает необязательный атрибут data-color_scheme значения которого:
      - 1
      - 2

    Компонет принимает необязательный атрибут use_offset, который смещает TextContentIndependent__text вправо на --inside-offset-xl

    Слот имеет вид:
      - h2 - заголовок (обязательно), которому ОБЯЗАТЕЛЬНО нужно задать один из классов:
        - type-heading-h2

      - p обзац (опционально), которому ОБЯЗАТЕЛЬНО нужно задать один из классов:
        - type-body-l
        - type-body-m
        - type-body-s
  -->

  <div class="TextContentIndependent">
    <div class="TextContentIndependent__heading">
      <slot name="title" />
    </div>

    <div class="TextContentIndependent__text">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.TextContentIndependent {
  @include setGridLayout();
}

.TextContentIndependent[data-color_scheme='1'] {
  color: var(--primary-on-solid);
}

.TextContentIndependent[data-color_scheme='2'] {
  color: var(--static-white);
}

.TextContentIndependent__heading {
  grid-column: span 6;
}

.TextContentIndependent__text {
  padding-top: var(--stack-spacing-s);
  grid-column: span 6;
}

.TextContentIndependent[use_offset] .TextContentIndependent__text {
  transform: translateX(var(--inside-offset-xl));
  width: calc(100% - var(--inside-offset-xl));
}

.TextContentIndependent p.type-body-l {
  grid-column: span 5;
  margin-bottom: var(--outside-text-body-l);
}

.TextContentIndependent p.type-body-m {
  grid-column: span 4;
  margin-bottom: var(--outside-text-body-m);
}

.TextContentIndependent p.type-body-s {
  grid-column: span 4;
  margin-bottom: var(--outside-text-body-s);
}

.TextContentIndependent :last-child {
  margin-bottom: 32px;
}

.TextContentIndependent p:last-child {
  margin-bottom: 0;
}

@media (max-width: 1343px) {
  .TextContentIndependent p.type-body-l {
    grid-column: span 6;
  }

  .TextContentIndependent p.type-body-m {
    grid-column: span 5;
  }

  .TextContentIndependent p.type-body-s {
    grid-column: span 5;
  }
}

@media (max-width: 1007px) {
  .TextContentIndependent[use_offset] .TextContentIndependent__text {
    transform: none;
    width: 100%;
  }

  .TextContentIndependent__heading {
    grid-column: span 8;
    margin-bottom: var(--outside-text-2xl);
  }

  .TextContentIndependent__text {
    grid-template-columns: repeat(8, 1fr);
    transform: translateX(0);
    padding-top: 0;
    grid-column: span 8;
  }

  .TextContentIndependent p.type-body-l {
    grid-column: span 6;
    padding-right: 0;
  }

  .TextContentIndependent p.type-body-m {
    grid-column: span 5;
  }
}

@media (max-width: 719px) {
  .TextContentIndependent__text {
    grid-template-columns: repeat(4, 1fr);
  }

  .TextContentIndependent p.type-body-l {
    grid-column: span 4;
  }

  .TextContentIndependent p.type-body-m {
    grid-column: span 4;
  }

  .TextContentIndependent p.type-body-s {
    grid-column: span 4;
  }
}
</style>
