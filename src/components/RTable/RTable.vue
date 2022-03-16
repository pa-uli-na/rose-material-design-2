<script setup lang="ts">
import { onMounted } from "vue";
import { MDCDataTable } from "@material/data-table";

onMounted(() => {
  new MDCDataTable(document.querySelector(".mdc-data-table") as Element);
});
</script>

<template>
  <div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
      <table class="mdc-data-table__table" aria-label="Dessert calories">
        <thead>
          <tr class="mdc-data-table__header-row">
            <th
              class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
              role="columnheader"
              scope="col"
            >
              <div
                class="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected"
              >
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  aria-label="Toggle all rows"
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
                <div class="mdc-checkbox__ripple"></div>
              </div>
            </th>
            <th
              class="mdc-data-table__header-cell"
              role="columnheader"
              scope="col"
            >
              Signal name
            </th>
            <th
              class="mdc-data-table__header-cell"
              role="columnheader"
              scope="col"
            >
              Status
            </th>
            <th
              class="mdc-data-table__header-cell"
              role="columnheader"
              scope="col"
            >
              Severity
            </th>
            <th
              class="mdc-data-table__header-cell"
              role="columnheader"
              scope="col"
            >
              Stage
            </th>
            <th
              class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
              role="columnheader"
              scope="col"
            >
              Time
            </th>
            <th
              class="mdc-data-table__header-cell"
              role="columnheader"
              scope="col"
            >
              Roles
            </th>
          </tr>
        </thead>
        <tbody class="mdc-data-table__content">
          <tr data-row-id="u0" class="mdc-data-table__row">
            <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
              <div class="mdc-checkbox mdc-data-table__row-checkbox">
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  aria-labelledby="u0"
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
                <div class="mdc-checkbox__ripple"></div>
              </div>
            </td>
            <th class="mdc-data-table__cell" scope="row" id="u0">
              Arcus watch slowdown
            </th>
            <td class="mdc-data-table__cell">Online</td>
            <td class="mdc-data-table__cell">Medium</td>
            <td class="mdc-data-table__cell">Triaged</td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
              0:33
            </td>
            <td class="mdc-data-table__cell">Allison Brie</td>
          </tr>
          <tr
            data-row-id="u1"
            class="mdc-data-table__row mdc-data-table__row--selected"
            aria-selected="true"
          >
            <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
              <div
                class="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected"
              >
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  checked
                  aria-labelledby="u1"
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
                <div class="mdc-checkbox__ripple"></div>
              </div>
            </td>
            <th class="mdc-data-table__cell" scope="row" id="u1">
              monarch: prod shared ares-managed-features-provider-heavy
            </th>
            <td class="mdc-data-table__cell">Offline</td>
            <td class="mdc-data-table__cell">Huge</td>
            <td class="mdc-data-table__cell">Triaged</td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
              0:33
            </td>
            <td class="mdc-data-table__cell">Brie Larson</td>
          </tr>
          <tr
            data-row-id="u2"
            class="mdc-data-table__row mdc-data-table__row--selected"
            aria-selected="true"
          >
            <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
              <div
                class="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected"
              >
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  checked
                  aria-labelledby="u2"
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
                <div class="mdc-checkbox__ripple"></div>
              </div>
            </td>
            <th class="mdc-data-table__cell" scope="row" id="u2">
              monarch: prod shared ares-managed-features-provider-heavy
            </th>
            <td class="mdc-data-table__cell">Online</td>
            <td class="mdc-data-table__cell">Minor</td>
            <td class="mdc-data-table__cell">Not triaged</td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
              0:33
            </td>
            <td class="mdc-data-table__cell">Jeremy Lake</td>
          </tr>
          <tr data-row-id="u3" class="mdc-data-table__row">
            <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
              <div class="mdc-checkbox mdc-data-table__row-checkbox">
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  aria-labelledby="u3"
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
                <div class="mdc-checkbox__ripple"></div>
              </div>
            </td>
            <th class="mdc-data-table__cell" scope="row" id="u3">
              Arcus watch slowdown
            </th>
            <td class="mdc-data-table__cell">Online</td>
            <td class="mdc-data-table__cell">Negligible</td>
            <td class="mdc-data-table__cell">Triaged</td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
              0:33
            </td>
            <td class="mdc-data-table__cell">Angelina Cheng</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mdc-data-table__pagination">
      <div class="mdc-data-table__pagination-trailing">
        <div class="mdc-data-table__pagination-rows-per-page">
          <div class="mdc-data-table__pagination-rows-per-page-label">
            Rows per page
          </div>

          <div
            class="mdc-select mdc-select--outlined mdc-select--no-label mdc-data-table__pagination-rows-per-page-select"
          >
            <div
              class="mdc-select__anchor"
              role="button"
              aria-haspopup="listbox"
              aria-labelledby="demo-pagination-select"
              tabindex="0"
            >
              <span class="mdc-select__selected-text-container">
                <span
                  id="demo-pagination-select"
                  class="mdc-select__selected-text"
                  >10</span
                >
              </span>
              <span class="mdc-select__dropdown-icon">
                <svg
                  class="mdc-select__dropdown-icon-graphic"
                  viewBox="7 10 10 5"
                >
                  <polygon
                    class="mdc-select__dropdown-icon-inactive"
                    stroke="none"
                    fill-rule="evenodd"
                    points="7 10 12 15 17 10"
                  ></polygon>
                  <polygon
                    class="mdc-select__dropdown-icon-active"
                    stroke="none"
                    fill-rule="evenodd"
                    points="7 15 12 10 17 15"
                  ></polygon>
                </svg>
              </span>
              <span class="mdc-notched-outline mdc-notched-outline--notched">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>
            </div>

            <div
              class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
              role="listbox"
            >
              <ul class="mdc-list">
                <li
                  class="mdc-list-item mdc-list-item--selected"
                  aria-selected="true"
                  role="option"
                  data-value="10"
                >
                  <span class="mdc-list-item__text">10</span>
                </li>
                <li class="mdc-list-item" role="option" data-value="25">
                  <span class="mdc-list-item__text">25</span>
                </li>
                <li class="mdc-list-item" role="option" data-value="100">
                  <span class="mdc-list-item__text">100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mdc-data-table__pagination-navigation">
          <div class="mdc-data-table__pagination-total">1‑10 of 100</div>
          <button
            class="mdc-icon-button material-icons mdc-data-table__pagination-button"
            data-first-page="true"
            disabled
          >
            <div class="mdc-button__icon">first_page</div>
          </button>
          <button
            class="mdc-icon-button material-icons mdc-data-table__pagination-button"
            data-prev-page="true"
            disabled
          >
            <div class="mdc-button__icon">chevron_left</div>
          </button>
          <button
            class="mdc-icon-button material-icons mdc-data-table__pagination-button"
            data-next-page="true"
          >
            <div class="mdc-button__icon">chevron_right</div>
          </button>
          <button
            class="mdc-icon-button material-icons mdc-data-table__pagination-button"
            data-last-page="true"
          >
            <div class="mdc-button__icon">last_page</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "r-table",
});
</script>

<style lang="scss">
@use "@material/checkbox/mdc-checkbox";
@use "@material/icon-button/mdc-icon-button";
@use "@material/data-table/mdc-data-table";
</style>
